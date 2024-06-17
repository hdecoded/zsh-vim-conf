# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# homebrew setup
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

# enabling powerlevel10k
source /home/linuxbrew/.linuxbrew/share/powerlevel10k/powerlevel10k.zsh-theme

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# history setup
HISTFILE=$HOME/.zhistory
SAVEHIST=1000
HISTSIZE=999
setopt share_history
setopt hist_expire_dups_first
setopt hist_ignore_dups
setopt hist_verify

# completion using arrow keys (based on the whole line history)

autoload -U up-line-or-beginning-search
autoload -U down-line-or-beginning-search
zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search
bindkey "${terminfo[kcuu1]}" up-line-or-beginning-search # Up
bindkey "${terminfo[kcud1]}" down-line-or-beginning-search # Down

# completion using arrow keys (based on the whole first word history)
# bindkey "${terminfo[kcuu1]}" up-line-or-search
# bindkey "${terminfo[kcud1]}" down-line-or-search

# Sourcing the ZSH syntax highlighting from brew 
source /home/linuxbrew/.linuxbrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# Sourcing the ZSH auto suggestions from berw
source /home/linuxbrew/.linuxbrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh
