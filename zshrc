# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
bindkey -v
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/home/tarun/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall

# Sources
source ~/zsh-plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/zsh-plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/zsh-plugins/zsh-autopair/zsh-autopair.plugin.zsh
bindkey -e will be emacs mode
bindkey -v
export KEYTIMEOUT=1



#Changing the autocompletions colour
zstyle ':completion:*' list-colors ${(s.:.)LS_COLORS}



## autoload vcs and colors
autoload -Uz vcs_info
autoload -U colors && colors



# enable only git 
zstyle ':vcs_info:*' enable git 



# setup a hook that runs before every ptompt. 
precmd_vcs_info() { vcs_info }
precmd_functions+=( precmd_vcs_info )
setopt prompt_subst



# add a function to check for untracked files in the directory.
# from https://github.com/zsh-users/zsh/blob/master/Misc/vcs_info-examples
zstyle ':vcs_info:git*+set-message:*' hooks git-untracked
+vi-git-untracked(){
	if [[ $(git rev-parse --is-inside-work-tree 2> /dev/null) == 'true' ]] && \
        	git status --porcelain | grep '??' &> /dev/null ; then
        	# This will show the marker if there are any untracked files in repo.
        	# If instead you want to show the marker only if there are untracked
        	# files in $PWD, use:
        	#[[ -n $(git ls-files --others --exclude-standard) ]] ; then
        	hook_com[staged]+='!' # signify new files with a bang
        fi
}
zstyle ':vcs_info:*' check-for-changes true
# zstyle ':vcs_info:git:*' formats " %r/%S %b %m%u%c "
zstyle ':vcs_info:git:*' formats " %{$fg[blue]%}(%{$fg[red]%}%m%u%c%{$fg[yellow]%}%{$fg[magenta]%} %b%{$fg[blue]%})"
# format our main prompt for hostname current folder, and permissions.
PROMPT="%B%{$fg[blue]%}[%{$fg[white]%}%n%{$fg[red]%}@%{$fg[white]%}%m%{$fg[blue]%}] %(?:%{$fg_bold[green]%}➜ :%{$fg_bold[red]%}➜ )%{$fg[cyan]%}%c%{$reset_color%}"
# PROMPT="%{$fg[green]%}%n@%m %~ %{$reset_color%}%#> "
PROMPT+="\$vcs_info_msg_0_ "
# TODO look into this for more colors
# https://stevelosh.com/blog/2010/02/my-extravagant-zsh-prompt/
# also ascii escape codes
# Aliases
alias nvimrc="nvim ~/.config/nvim/init.lua"
alias zshrc="nvim ~/zshrc"
alias zsource="source ~/zshrc"
alias dnv="nvim"
alias alaconfig="dnv /mnt/c/Users/SANAL/AppData/Roaming/alacritty/alacritty.yml"
alias lg="lazygit"
alias rngr="ranger"
alias nf="neofetch"
alias clr="clear"
alias ll="exa --icons -l"
alias la="exa --icons -a"
alias ls="exa --icons --color=auto"
alias cat="bat"
alias gst="git status"
alias ..="cd .."
alias mv="mv -i"
alias rm="rm -i"
alias cp="cp -i"
# For  plugins: https://github.com/unixorn/awesome-zsh-plugins
# Completions https://github.com/zsh-users/zsh-completions
#Setting default startup directory to ~/home
cd
#Basic autocompletion
autoload -U compinit
zstyle ':completion:*' menu select
#Autocompletion with case insensitivity
zstyle ':completion:*' matcher-list '' 'm:{a-zA-Z}={A-za-A}' 'r:|[._-]=* r:|=*' 'l:|=* r:|=*'
# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH
ENABLE_CORRECTION="true"
COMPLETION_WAITING_DOTS="true"
GITSTATUS_LOG_LEVEL=DEBUG

# Exports
export EDITOR=nvim
export PATH=$HOME/.cargo/bin:$PATH
export BROWSER=chrome
export TERMINAL=alacritty
export DENO_INSTALL="/home/tarun/.deno"
export PATH=$DENO_INSTALL/bin:$PATH
export PATH=$HOME/dev/flutter/bin:$PATH

# Enable neofetch on startup
nf
