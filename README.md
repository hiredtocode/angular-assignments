# angular-refs

Repo of things I've learned in Angular

## Add New Project to Workspace

Create a new app under the workspace.

```terminal
ng generate application (name)
```

## Run the App

3 ways to run the app.

```terminal
ng serve (app-name)
```

```terminal
ng serve --project="(app-name)"
```

Open the Angular.json and set `defaultProject` to (default-app-name). and run:

```terminal
ng serve
```

## Add Another Project to Workspace

```terminal
ng generate application (app2)
ng generate application (app3)
```

ng serve --project="(app-name)"

## Build App for Production

```terminal
ng build --prod --project="(app-name)"
```

### How to create new multi app repo

#### Create the Empty Workspace

```terminal
ng new MultipleApps --createApplication="false"
cd MultipleApps
```

The above command creates folder with the name MultipleApps and configures the workspace. It does not create any apps.
