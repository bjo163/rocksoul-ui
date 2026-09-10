import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "../components/ui/button"
import {
  DateInput,
  FileInput,
  FormActions,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  PasswordInput,
} from "../components/molecules"

const meta = {
  title: "Molecules/Forms",
  component: FormActions,
  tags: ["autodocs"],
} satisfies Meta<typeof FormActions>

export default meta
type Story = StoryObj<typeof meta>

export const FormActionRow: Story = {
  render: () => (
    <FormActions>
      <Button variant="ghost">Cancel</Button>
      <Button>Save changes</Button>
    </FormActions>
  ),
}

export const Password: Story = {
  render: () => <PasswordInput aria-label="Account password" placeholder="Enter password" />,
}

export const File: Story = {
  render: () => <FileInput aria-label="Evidence file" accept=".pdf,.docx" />,
}

export const Date: Story = {
  render: () => <DateInput aria-label="Review date" />,
}

export const InputGroupExample: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
      <InputGroupInput aria-label="Website address" placeholder="example.com" />
    </InputGroup>
  ),
}
