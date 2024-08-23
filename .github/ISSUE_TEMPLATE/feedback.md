# Feedback Form Configuration

The following is the configuration for the feedback form:

```yaml
feedback_form:
  - type: input
    id: feedback_source
    attributes:
      label: "Where is the feedback from?"
      description: "Please specify the source of the feedback (e.g., client, internal team, user testing)."
      placeholder: "e.g., Client, User Testing"
    validations:
      required: true

  - type: input
    id: feedback_date
    attributes:
      label: "Date of Feedback"
      description: "Enter the date when the feedback was received."
      placeholder: "YYYY-MM-DD"
    validations:
      required: true
      format: date

  - type: select
    id: feedback_usefulness
    attributes:
      label: "Is this feedback useful?"
      description: "Select whether the feedback is useful or not."
      options:
        - "Yes"
        - "No"
    validations:
      required: true

  - type: select
    id: feedback_agreement
    attributes:
      label: "Does everyone agree with this feedback?"
      description: "Select whether there is consensus on the feedback."
      options:
        - "Yes"
        - "No"
    validations:
      required: true

  - type: conditional
    condition: "feedback_agreement == 'Yes'"
    fields:
      - type: input
        id: decision_log_push
        attributes:
          label: "Push to Decision Log"
          description: "If the feedback is agreed upon, record the decision."
          placeholder: "Enter decision summary to log."
        validations:
          required: true
