import pandas as pd 
df = pd.DataFrame({ 'age': [25, 30, 35, 40, 45], 'salary': [10000, 20000, 30000, 40000, 50000], 'experience': [1, 2, 3, 4, 5] }) 
# To split the DataFrame into training and testing sets:  
from sklearn.model_selection import train_test_split 
X_train, X_test, y_train, y_test = train_test_split(df[['age', 'experience']], df['salary'], test_size=0.2, random_state=42)