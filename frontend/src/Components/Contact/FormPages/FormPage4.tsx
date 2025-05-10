interface FormPage4Props {
  sending: boolean;
  sent: boolean;
}

export const FormPage4 = ({ sending, sent }: FormPage4Props) => {
  return (
    <div>
      {sending && <div className="text-yellow-500">Sending...</div>}
      {sent && (
        <div className="text-green-500">
          Message sent, will get in touch soon!
        </div>
      )}
    </div>
  );
};
