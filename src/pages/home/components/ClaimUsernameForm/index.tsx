import { Form, FormAnnotation } from "./styles"
import { Button, Text, TextInput } from "@ignite-ui/react"
import { ArrowRight } from "phosphor-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const claimUsernameFormSchema = z.object({
  username: z.string()
    .min(3, {
      message: "O nome de usuário deve ter no mínimo 3 caracteres."
    })
    .max(16)
    .regex(/^([a-z\\-]+)$/i, {
      message: "O nome de usuário deve conter apenas letras e hífens."
    })
    .transform((username) => username.toLowerCase())
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameFrom() {
  const { register, handleSubmit, formState: { errors } } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema)
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return <>
    <Form
      as="form"
      onSubmit={handleSubmit(handleClaimUsername)}
    >
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="username"
        crossOrigin={undefined}
        {...register("username")}
      />
      <Button
        size="sm"
        type="submit"
      >
        <ArrowRight />
        Reservar
      </Button>
    </Form>
    <FormAnnotation>
      <Text size="sm">
        {errors.username ? errors.username.message : "Escolha um nome de usuário para o seu perfil."}
      </Text>
    </FormAnnotation>
  </>
}