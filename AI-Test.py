import base64
import json
import google.generativeai as palm
import time

palm.configure(api_key="AIzaSyDHt49ArGg0gQZWevD3zNzOBQzKtcOTHmM")

defaults = {
  'model': 'models/text-bison-001',
  'temperature': 0.75,
  'candidate_count': 1,
  'top_k': 40,
  'top_p': 0.95,
  'max_output_tokens': 1024,
  'stop_sequences': [],
 'safety_settings': [{"category":"HARM_CATEGORY_DEROGATORY","threshold":3},{"category":"HARM_CATEGORY_TOXICITY","threshold":3},{"category":"HARM_CATEGORY_VIOLENCE","threshold":3},
                     {"category":"HARM_CATEGORY_SEXUAL","threshold":3},{"category":"HARM_CATEGORY_MEDICAL","threshold":3},{"category":"HARM_CATEGORY_DANGEROUS","threshold":3}],
}

masterinput = int(input())
if masterinput == 1:
  input = input()
  prompt = f"""{input} - If this word is non inclusive replace it with inclusive terminology. Only replace the non inclusive word. Some examples are:

  He is black -> He is a person of color 
  Stewardess -> flight attendant 
  etc."""

  response = palm.generate_text(
    **defaults,
    prompt=prompt
  )
  print(response.result)

if masterinput == 2:
  input1 = input("what is your OS ")
  time.sleep(1)
  input2 = input("what is your goal ")

  prompt = f"""I am using a {input1} mobile phone - Give detailed steps to {input2}"""

  response = palm.generate_text(
    **defaults,
    prompt=prompt
  )
  print(response.result)