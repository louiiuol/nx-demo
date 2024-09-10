module.exports = {
  onPreBuild: ({ utils }) => {
    const currentProject = process.env.PROJECT_NAME;
    const lastDeployedCommit = process.env.CACHED_COMMIT_REF;
    const latestCommit = 'HEAD';
    const projectHasChanged = projectChanged(
      currentProject,
      lastDeployedCommit,
      latestCommit
    );
    if (!projectHasChanged) {
      utils.build.cancelBuild(
        `Build was cancelled because ${currentProject} was not affected by the latest changes`
      );
    }
  },
};

function projectChanged(currentProject, fromHash, toHash) {
  const execSync = require('child_process').execSync;
  const getAffected = `nx show projects --affected --exclude=*-e2e --json --base=${fromHash} --head=${toHash}`;
  const changedProjects = Array.from(execSync(getAffected));
  if (changedProjects.find((project) => project === currentProject)) {
    return true;
  } else {
    return false;
  }
}
