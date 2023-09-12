import { Button, TextInput } from "@ignite-ui/react"
import { Form } from "./styles"
import { ArrowRight } from "phosphor-react"

export function ClaimUsernameFrom() {
  return <Form>
    <TextInput
      size="sm"
      prefix="ignite.com/"
      placeholder="username"
      crossOrigin={undefined} />
    <Button
      size="sm"
      type="submit"
    >
      <ArrowRight />
      Reservar
    </Button>
  </Form>
}