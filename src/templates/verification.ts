export interface IVerificationTemplateProps {
    name: string;
    code: string;
}

export default function VerificationTemplate(props: IVerificationTemplateProps) {
    return `
      <body>
          <h1>Welcome to Kaha!</h1>
          <p>
              <b>Hello ${props.name}!</b> <br />
              We are glad that you have chosen to join with us!
          </p>
          <section>
              <h3>Your verification code is: ${props.code}</h3>
          </section>
      </body>
`;
}
