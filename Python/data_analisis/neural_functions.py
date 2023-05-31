import numpy as np
import pandas as pd

rg = np.random.default_rng()


def generate_data(n_features, n_values):
    features = rg.random((n_features, n_values))
    weights = rg.random((1, n_values))[0]
    targets = np.random.choice([0, 1], n_features)

    data = pd.DataFrame(features, columns=['x0', 'x1', 'x2'])
    data['targets'] = targets

    return data, weights


def get_weighted_sum(features, weights, bias):
    return np.dot(features, weights) + bias


def sigmoid(w_sum):
    return 1 / (1+np.exp(-w_sum))


def cross_entropy(target, prediction):
    return -(target*np.log10(prediction) + (1-target)*np.log10(1-prediction))


def update_weights(weights, l_rate, target, prediction, features):
    new_weights = []
    for x, w in zip(features, weights):
        new_w = w + l_rate*(target-prediction)*x
        new_weights.append(new_w)
    return new_weights


def update_bias(bias, one_rate, target, prediction):
    return bias + one_rate*(target-prediction)
