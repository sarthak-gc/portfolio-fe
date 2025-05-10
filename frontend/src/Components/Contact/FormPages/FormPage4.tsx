interface FormPage4Props {
  sending: boolean;
  sent: boolean;
}

export const FormPage4 = ({ sending, sent }: FormPage4Props) => {
  return (
    <div className="text-2xl">
      {sending && <div>Sending...</div>}
      {sent && <div>Message sent, will get in touch soon!</div>}
    </div>
  );
};
