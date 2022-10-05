package com.churris.SKABackend

import com.churris.SKABackend.services.DatabaseService
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SkaBackendApplication

fun main(args: Array<String>) {
	runApplication<SkaBackendApplication>(*args)
}
