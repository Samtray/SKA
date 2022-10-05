package com.churris.SKABackend.repositories

import com.churris.SKABackend.models.Test
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface TestRepository : JpaRepository<Test, Long>