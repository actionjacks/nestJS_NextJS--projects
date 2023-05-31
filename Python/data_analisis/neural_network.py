import numpy as np
import pandas as pd
from neural_functions import generate_data, get_weighted_sum, sigmoid, cross_entropy, update_weights, update_bias

bias = 0.5
l_rate = 0.1
epochs = 10
epoch_loss = []

data, weights = generate_data(4, 3)


def train_model(data, weights, bias, l_rate, epochs):
    for e in range(epochs):
        individual_loss = []

        for i in range(len(data)):
            features = data.loc[i][:-1]  # last index
            target = data.loc[i][-1]
            w_sum = get_weighted_sum(features, target, bias)
            prediction = sigmoid(w_sum)
            loss = cross_entropy(target, prediction)

            individual_loss.append(loss)

            weights = update_weights(
                weights, l_rate, target, prediction, features)
            bias = update_bias(bias, l_rate, target, prediction)

        average_loss = sum(individual_loss)/len(individual_loss)
        epoch_loss.append(average_loss)

        print('------------------------------------')
        print('epoch', e)
        print(average_loss)


train_model(data, weights, bias, l_rate, epochs)

df = pd.DataFrame(epoch_loss)
df_plot = df.plot(kind="line", grid=True).get_figure()
df_plot.savefig("training.pdf")
