import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { setActiveNote } from '../../store/journal/journalSlice';
import { ImageGallery } from '../components';

export const NoteView = () => {
  const dispatch = useDispatch()
  const { active: note } = useSelector(state => state.journal)
  const { title, body, date, onInputChange, formState } = useForm(note)

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
    dispatch()
  }
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
          <Button onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
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
      <ImageGallery />
    </Grid>
  );
};
