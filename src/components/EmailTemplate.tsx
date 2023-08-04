import { EmailTemplateProps } from "@/app/api/send/route";

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => (
  <div>
    <p>
      Name: {firstName} {lastName}
    </p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);
