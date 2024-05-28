from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    job_description = data.get('job_description', '')
    responsibilities = data.get('responsibilities', '')

    # Example analysis logic, you should replace this with your own logic
    recommendations = {
        "skills": ["Python", "SEO", "Content Writing"],
        "suggestions": ["Add more keywords", "Include specific examples"]
    }

    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

