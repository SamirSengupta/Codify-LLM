from flask import Flask, jsonify, request, render_template
import google.generativeai as genai
from internal import internal, keys

app = Flask(__name__, static_url_path='/static')

# Configure codify  AI
genai.configure(api_key=keys)  
model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat_endpoint():
    try:
        user_message = request.json['message']
        internal_prompt = internal
        combined_message = f"{internal_prompt} {user_message}"
        response = chat.send_message(combined_message)
        ai_response = response.text
        
        return jsonify({'message': ai_response})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=False)
