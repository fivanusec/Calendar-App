import { Form, Formik } from "formik";
import { StyledModal } from "../Modal/Modal.style";
import InputField from "../InputField";
import Button from "../Button";
import { useMutation, useQueryClient } from "react-query";
import CreateEvent from "../../api/calendar/events/CreateEvent";

export const CreationForm = ({ calendarId, closeModal }) => {
  const queryClient = useQueryClient();

  const addEvent = useMutation((data) => CreateEvent(calendarId, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
      closeModal();
    },
  });

  return (
    <>
      <Formik
        initialValues={{
          naziv: "",
          datumPocetka: "",
          datumKraja: "",
        }}
        onSubmit={(values) => {
          addEvent.mutate(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <InputField
              label="Naziv dogadaja"
              name="naziv"
              type="text"
              error={errors.summary}
            />
            <InputField
              label="Datum pocetka"
              name="datumPocetka"
              type="datetime-local"
              error={errors.start}
            />
            <InputField
              label="Datum kraja"
              name="datumKraja"
              type="datetime-local"
              error={errors.end}
            />
            <StyledModal.Footer className="mt-4">
              <Button
                size="sm"
                style={{ backgroundColor: "#53c972", borderColor: "#53c972" }}
                type="submit"
              >
                Spremi
              </Button>
            </StyledModal.Footer>
          </Form>
        )}
      </Formik>
    </>
  );
};
