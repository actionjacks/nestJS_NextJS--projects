kubectl run mynginx --image=nginx
# get all list of pods
kubectl get pods
# more info
kubectl get pods -o wide 
kubectl describe pod mynginx
# delete
kubectl delete pod mynginx
kubectl delete -f [contaoner.yaml] --force --grace-period=0

# run node using YAML file
kubectl create -f myapp.yaml

## create deeployment
kubectl apply -f myapp_.yaml
# wait for main pod co come up
kubectl get pods