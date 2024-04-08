
# Codify-LLM

Codify-LLM is a Flask web application that utilizes the Google GenerativeAI library which is trained on 7B parameters provide a conversational interface powered by a generative AI model. Users can interact with the AI model by sending messages through the web interface, and the model responds with generated text based on the conversation history.

## Installation

To run Codify-LLM, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/SamirSengupta/Codify-LLM.git
```

2. Install the required dependencies:

```bash
pip install Flask google-generativeai
```

3. Obtain an API key for the GenerativeAI model and update the `keys.py` file accordingly.

4. Run the Flask application:

```bash
python codify.py
```

## Usage

Once the Flask application is running, navigate to `http://localhost:5000` in your web browser. You will be presented with a chat interface where you can interact with the AI model. Type your message in the input box and press Enter to send it. The AI model will respond with generated text based on the conversation history.

## Configuration

The `internal` variable in the `codify.py` file contains the internal prompt used by the AI model. You can customize this prompt to tailor the conversation experience according to your requirements.

## Author

- [Samir Sengupta](https://github.com/SamirSengupta)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
