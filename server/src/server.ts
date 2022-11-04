import Fastify from "fastify";
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { poolRoutes } from "./routes/pool";
import { userRoutes } from "./routes/user";
import { guessRoutes } from "./routes/guess";
import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";

async function boostrap(){
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true, //prod -> dominio url
    })

    await fastify.register(jwt,  {
        secret: 'nlwcopa', //em produção deve ser uma var ambiente.
    })

    fastify.register(poolRoutes)
    fastify.register(userRoutes)
    fastify.register(guessRoutes)
    fastify.register(authRoutes)
    fastify.register(gameRoutes)

    await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

boostrap()