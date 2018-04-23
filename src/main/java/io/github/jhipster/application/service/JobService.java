package io.github.jhipster.application.service;

import io.github.jhipster.application.service.dto.JobDTO;
import java.util.List;

/**
 * Service Interface for managing Job.
 */
public interface JobService {

    /**
     * Save a job.
     *
     * @param jobDTO the entity to save
     * @return the persisted entity
     */
    JobDTO save(JobDTO jobDTO);

    /**
     * Get all the jobs.
     *
     * @return the list of entities
     */
    List<JobDTO> findAll();

    /**
     * Get the "id" job.
     *
     * @param id the id of the entity
     * @return the entity
     */
    JobDTO findOne(Long id);

    /**
     * Delete the "id" job.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
