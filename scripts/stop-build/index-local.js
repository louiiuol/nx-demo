const currentProject = 'showcase';
const lastDeployedCommit = 'd99f8c6d4fc9785c0a3df3d83d17dcc49198ce91';
const latestCommit = 'HEAD';
const projectHasChanged = projectChanged(
  currentProject,
  lastDeployedCommit,
  latestCommit
);
if (!projectHasChanged) {
  console.log('cancel build');
}

function projectChanged(currentProject, fromHash, toHash) {
  const execSync = require('child_process').execSync;
  const getAffected = `nx show projects --affected --type app --json --base=${fromHash} --head=${toHash}`;
  const output = execSync(getAffected).toString('utf-8');
  //get the list of changed projects from the output
  console.log();

  //const changedProjects = JSON.parse(output).projects;
  return output.includes(currentProject);
}
