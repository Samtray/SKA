package com.churris.SKABackend.controllers

import com.churris.SKABackend.models.Test
import com.churris.SKABackend.services.DatabaseService
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class MessageResource(val service: DatabaseService) {
    @GetMapping
    fun getAllPlayers() = service.getAll()

    @GetMapping("/{id}")
    fun getPlayer(@PathVariable id: Long) = service.getById(id)

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun savePlayer(@RequestBody test: Test): Test? = service.create(test)

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deletePlayer(@PathVariable id: Long) = service.remove(id)

    @PutMapping("/{id}")
    fun updatePlayer(
        @PathVariable id: Long, @RequestBody test: Test
    ) = service.update(id, test)
}