## If you get error related port like this

ERROR : Building ImageUpload-logic component in no hup mode
docker: Error response from daemon: driver failed programming external connectivity on endpoint relaxed_swanson (48bcaf8c4123d12a10801848759808da8e445169a0a3da4489ac9a5bbca34008): Bind for 0.0.0.0:3000 failed: port is already allocated.

## Then you can use this command

```
sudo kill -9 $(sudo lsof -t -i:<< port >>)

```

## If you get error like "CrashLoopBack off" 

ERROR : CrashLoopBack off 

container pod is giving the error like this then see the logs of container

```
kubectl logs -f << pod name >>
```

Otherwise you can describe the pod also

```
kubectl describe po << pod name >>
```