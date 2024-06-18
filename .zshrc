
# ---------------------- p10k Start ---------------------- #

# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.

# enabling powerlevel10k
source $(brew --prefix)/share/powerlevel10k/powerlevel10k.zsh-theme

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# ---------------------- p10k end ---------------------- #

# ---------------------- homebrew autoload start ---------------------- #
if type brew &>/dev/null
then
  FPATH="$(brew --prefix)/share/zsh/site-functions:${FPATH}"

  autoload -Uz compinit
  compinit
fi

# ---------------------- homebrew autoload end ---------------------- #

# ---------------------- history start ---------------------- #

HISTFILE=$HOME/.zhistory
SAVEHIST=1000
HISTSIZE=999
setopt share_history
setopt hist_expire_dups_first
setopt hist_ignore_dups
setopt hist_verify

# ---------------------- history end ---------------------- #

# ---------------------- keybindings start ---------------------- #

# completion using arrow keys (based on the whole line history)

# source ~/.zsh_keybind

# Load zsh line functions
autoload -U up-line-or-beginning-search
autoload -U down-line-or-beginning-search
zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search

# Define key bindings
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS specific key bindings
  bindkey "^[[A" up-line-or-beginning-search
  bindkey "^[[B" down-line-or-beginning-search
  bindkey "^[[C" forward-word
  bindkey "^[[D" backward-word
else
  # WSL specific key bindings
  bindkey "${terminfo[kcuu1]}" up-line-or-beginning-search
  bindkey "${terminfo[kcud1]}" down-line-or-beginning-search
  bindkey "\e[1;5C" forward-word
  bindkey "\e[1;5D" backward-word
  bindkey "\e[3;5~" kill-word      # ctrl+delete
  bindkey '^H' backward-kill-word  # ctrl+backspace
  bindkey "\e[3;6~" kill-line      # ctrl+shift+delete
  # bindkey "\eOc" forward-word      # urxvt forward-word
  # bindkey "\eOd" backward-word     # urxvt backward-word
  # bindkey "\e[3^" kill-word        # urxvt ctrl+delete
  # bindkey "\e[3@" kill-line        # urxvt ctrl+shift+delete
fi


# ---------------------- keybindings end ---------------------- #

# ---------------------- aliases start ---------------------- #

source ~/.zsh_aliases

# ---------------------- aliases end ---------------------- #

# ---------------------- zsh plugins start ---------------------- #

# Sourcing the ZSH syntax highlighting from brew 
source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# Sourcing the ZSH auto suggestions from berw
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh

# Zoxide (better cd) 
eval "$(zoxide init zsh)"

# bat (better cat) config
export BAT_THEME=Dracula

# you-should-use 
source ~/.zsh/.ysu/you-should-use.plugin.zsh

# fzf-alias 
source ~/.zsh/.fzf-alias/fzf-alias.plugin.zsh

##  zsh auto complete 
#source $(brew --prefix)/share/zsh-autocomplete/zsh-autocomplete.plugin.zsh

# ---------------------- zsh plugins end ---------------------- #

# ---------------------- fzf plugin start ---------------------- #

# Source fzf for ctrl+t shortcut - setting up shell integration 
source <(fzf --zsh)

# -- Use fd instead of fzf --
export FZF_DEFAULT_COMMAND="fd --hidden --strip-cwd-prefix --exclude .git"
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_ALT_C_COMMAND="fd --type=d --hidden --strip-cwd-prefix --exclude .git"

# Use fd (https://github.com/sharkdp/fd) for listing path candidates.
# - The first argument to the function ($1) is the base path to start traversal
# - See the source code (completion.{bash,zsh}) for the details.
_fzf_compgen_path() {
  fd --hidden --exclude .git . "$1"
}

# Use fd to generate the list for directory completion
_fzf_compgen_dir() {
  fd --type=d --hidden --exclude .git . "$1"
}

# --- setup fzf theme start ---
fg="#CBE0F0"
bg="#011628"
bg_highlight="#143652"
purple="#B388FF"
blue="#06BCE4"
cyan="#2CF9ED"

export FZF_DEFAULT_OPTS="--color=fg:${fg},bg:${bg},hl:${purple},fg+:${fg},bg+:${bg_highlight},hl+:${purple},info:${blue},prompt:${cyan},pointer:${cyan},marker:${cyan},spinner:${cyan},header:${cyan}"
# --- setup fzf theme end ---
# Source fzf git cloned from https://github.com/junegunn/fzf-git.sh.git
source ~/.zsh/.fzf-git/fzf-git.sh

# Integrate bat and eza with fzf 
#
export FZF_CTRL_T_OPTS="--preview 'bat -n --color=always --line-range :500 {}'"
export FZF_ALT_C_OPTS="--preview 'eza --tree --color=always {} | head -200'"

# Advanced customization of fzf options via _fzf_comprun function
# - The first argument to the function is the name of the command.
# - You should make sure to pass the rest of the arguments to fzf.
_fzf_comprun() {
  local command=$1
  shift

  case "$command" in
    cd)           fzf --preview 'eza --tree --color=always {} | head -200' "$@" ;;
    export|unset) fzf --preview "eval 'echo $'{}"         "$@" ;;
    ssh)          fzf --preview 'dig {}'                   "$@" ;;
    *)            fzf --preview "bat -n --color=always --line-range :500 {}" "$@" ;;
  esac
}

# ---------------------- fzf plugin end ---------------------- #

# ---------------------- sdkman start ---------------------- #

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"

# ---------------------- sdkman end ---------------------- #

