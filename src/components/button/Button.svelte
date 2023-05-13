<script lang="ts">
  export let title = "Button";
  export let type = "default";
  export let onClick: () => void = () => {};
</script>

<div>
  <button class={type} on:click={onClick}>{title}</button>
</div>

<style>
  button {
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 6px;
    min-width: 200px;
  }
  button:active {
    outline: 0;
  }

  button.default {
    background-color: #505b95;
  }
  button.default:hover {
    background-color: #4d5cb4;
  }

  button.error {
    background-color: #f44336;
  }
  button.error:hover {
    background-color: #d32f2f;
  }

  button.success {
    background-color: #4caf50;
  }
  button.success:hover {
    background-color: #3e8e41;
  }
</style>
