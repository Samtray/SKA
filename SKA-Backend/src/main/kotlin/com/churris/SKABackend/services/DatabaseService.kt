package com.churris.SKABackend.services

import com.churris.SKABackend.models.Test
import com.churris.SKABackend.repositories.TestRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException

@Service
class DatabaseService(val repository: TestRepository) {

    fun getAll(): MutableIterable<Test> = repository.findAll()

    fun getById(id: Long): Test = repository.findByIdOrNull(id) ?:
    throw ResponseStatusException(HttpStatus.NOT_FOUND)

    fun create(player: Test): Test = repository.save(player)

    fun remove(id: Long) {
        if (repository.existsById(id)) repository.deleteById(id)
        else throw ResponseStatusException(HttpStatus.NOT_FOUND)
    }

    fun update(id: Long, player: Test): Test {
        return if (repository.existsById(id)) {
            player.id = id
            repository.save(player)
        } else throw ResponseStatusException(HttpStatus.NOT_FOUND)
    }
}