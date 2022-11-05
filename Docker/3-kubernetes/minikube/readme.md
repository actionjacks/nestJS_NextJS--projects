## minikube ip
## minikube shh
inside can docker ps

## kubectl cluster-info
## kubectl get namespaces
  ## kubectl get pods --namespaces=kube-system

## kubectl run nginx --image=nginx
  -to delete kubectl delete pod nginx
  ## kubectl describe pod nginx

## open container
```
docker exec -it [container] sh
  // hostname -i // 172.14.2.3...
    curl [ip-addres]
```

## kubectl get pods -o wide // get running containers (pods)

## kubectl deployment nginx-deployment --image=nginx
  ## kubectl scale deployment nginx-deployment --replicas=5

  ## kubectl get deployments
    create service expose ip adres off runing pods
  ## kubectl deployment nginx-deployment --port=8080 --target-port=80
  ## kubectl get services
    services is ip exposed runing pod and its replicas
      now services can acess from cluster not ouside to open cluster command minikube shh

## create deployment from   docker image
```
kubectl create deployment [name-deployment] --image=[dockerimage]
```
## create service to epose pod outside
```
kubectl expose deployment [name-deployment] --port=3000 <--express app from image work on 3000 so we expose 3000

// to show services
  kubectl get svc
// to connect to this service
  minikube shh => curl [ip-adres:port]
``` 
## create NODEPORT service
kubectl expose deployment [name-deployment] --type=NodePort --port=3000
  kubectl get svc // [neme-deployment] NodePort 10.100.242.154 pors 3000:324234/TCP

  minikube ip // some-ip-adress:324234 - service expose outside sluster

## create Load Balancer
kubectl expose deployment [name-deployment] --type=LoadBalancer --port=3000
 
 ## to deploy new version of image 
  kubectl image deployment [name-deployment] [name-deployment]=newimagesoruce:label(version)
        kubectl rollout status deploy [name-deployment]
## kubectl delete all -all

  ## use deployment .yml
    kubectl apply -f deployment.yaml
                  (f file, filename.yaml)
  ## delete 
    kubectl delete -f deployment.yaml

# services type = LoadBalancer, NodePort

to use two yml files in one file use
{ 
  first - yml file
}
---
{
  second - yml file
}