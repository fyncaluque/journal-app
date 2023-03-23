import { useMemo, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'sweetalert2/dist/sweetalert2.css'
import Swal from 'sweetalert2';
import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';

import { useForm } from '../../hooks';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startSaveNote, startUploadingFiles } from '../../store/journal/thunks';
import { ImageGallery } from '../components';

export const NoteView = () => {
  const dispatch = useDispatch()

  const { active: note, isSaving, messageSaved } = useSelector(state => state.journal)
  const { title, body, date, onInputChange, formState } = useForm(note)
  const fileInputRef = useRef()
  // Formatear fecha
  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString()
  }, [date])

  // Actualizar nota activa en el store
  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  // Guardar nota
  const onSaveNote = () => {
    dispatch(startSaveNote())
  }
  // Subir fotos
  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return
    dispatch(startUploadingFiles(target.files))
  }

  // Alerta sweet
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }
  }, [messageSaved])

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1, p: 1 }}
    >
      <Grid container justifyContent="space-between" direction="row">
        <Grid item>
          <Typography fontSize={35} fontWeight="light">
            {dateString}
          </Typography>
        </Grid>

        <Grid item>
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={onFileInputChange}
            style={{ display: 'none' }} />
          <IconButton
            color='primary'
            disabled={isSaving}
            onClick={() => fileInputRef.current.click()}
          >
            <UploadOutlined />
          </IconButton>
          <Button
            disabled={isSaving}
            onClick={onSaveNote}
            color="primary"
            sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          sx={{ border: 'none', mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      {/* Image gallery */}

      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
