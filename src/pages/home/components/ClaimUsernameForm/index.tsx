import { Button, TextInput } from "@ignite-ui/react"
import { Form } from "./styles"
import { ArrowRight } from "phosphor-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const claimUsernameFormSchema = z.object({
  username: z.string().min(3).max(20),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameFrom() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return <Form
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
}