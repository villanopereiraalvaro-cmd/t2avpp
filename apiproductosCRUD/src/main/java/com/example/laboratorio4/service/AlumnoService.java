
package com.example.laboratorio4.service;

import com.example.laboratorio4.model.Alumno;
import com.example.laboratorio4.repository.AlumnoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlumnoService {

    private final AlumnoRepository alumnoRepository;

    public AlumnoService(AlumnoRepository alumnoRepository) {
        this.alumnoRepository = alumnoRepository;
    }

    public List<Alumno> listarAlumnos() {
        return alumnoRepository.findAll();
    }

    public Optional<Alumno> buscarAlumno(Long id) {
        return alumnoRepository.findById(id);
    }

    public Alumno guardarAlumno(Alumno alumno) {
        return alumnoRepository.save(alumno);
    }

    public void eliminarAlumno(Long id) {
        alumnoRepository.deleteById(id);
    }

    public boolean existeAlumno(Long id) {
        return alumnoRepository.existsById(id);
    }
}
