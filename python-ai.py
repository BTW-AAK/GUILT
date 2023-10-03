import base64

import google.generativeai as palm

palm.configure(api_key="AIzaSyDHt49ArGg0gQZWevD3zNzOBQzKtcOTHmM")

defaults = {
  'model': 'models/text-bison-001',
  'temperature': 0.4,
  'candidate_count': 1,
  'top_k': 40,
  'top_p': 0.95,
  'max_output_tokens': 1024,
  'stop_sequences': [],
 'safety_settings': [{"category":"HARM_CATEGORY_DEROGATORY","threshold":3},{"category":"HARM_CATEGORY_TOXICITY","threshold":3},{"category":"HARM_CATEGORY_VIOLENCE","threshold":3},
                     {"category":"HARM_CATEGORY_SEXUAL","threshold":3},{"category":"HARM_CATEGORY_MEDICAL","threshold":3},{"category":"HARM_CATEGORY_DANGEROUS","threshold":3}],
}
tone = input("Tone (Formal/Friendly/Direct/Encouraging): ")
input = input("Input Phrase: ")
prompt = f"""{input} -  If these sentences have non-inclusive words replace it with inclusive words. do not change words unless neccessary. Tone to follow is""" + tone + """Some examples are:

He is black -> He is a person of color 
Stewardess -> flight attendant 
etc."""

response = palm.generate_text(
    **defaults,
    prompt=prompt
  )
print(response.result)