##
## Auto Generated makefile by CodeLite IDE
## any manual changes will be erased      
##
## Debug
ProjectName            =forst_work_1
ConfigurationName      =Debug
WorkspaceConfiguration =Debug
WorkspacePath          =C:\Users\actio\OneDrive\Pulpit\_learn\Kursy_C\codeLite_workspace\forst_work
ProjectPath            =C:\Users\actio\OneDrive\Pulpit\_learn\Kursy_C\codeLite_workspace\forst_work\forst_work_1
IntermediateDirectory  =$(ConfigurationName)
OutDir                 =$(IntermediateDirectory)
CurrentFileName        =
CurrentFilePath        =
CurrentFileFullPath    =
User                   =actio
Date                   =22/06/2023
CodeLitePath           ="C:\Program Files\CodeLite"
LinkerName             =link.exe /nologo
SharedObjectLinkerName =link.exe /nologo /DLL
ObjectSuffix           =.obj
DependSuffix           =
PreprocessSuffix       =.i
DebugSwitch            =/Zi 
IncludeSwitch          =/I
LibrarySwitch          = 
OutputSwitch           =/OUT:
LibraryPathSwitch      =/LIBPATH:
PreprocessorSwitch     =/D
SourceSwitch           =
OutputDirectory        =C:\Users\actio\OneDrive\Pulpit\_learn\Kursy_C\codeLite_workspace\forst_work\$(WorkspaceConfiguration)
OutputFile             =..\$(WorkspaceConfiguration)\$(ProjectName).exe
Preprocessors          =
ObjectSwitch           =/Fo
ArchiveOutputSwitch    =/OUT:
PreprocessOnlySwitch   =/P /Fi:
ObjectsFileList        ="forst_work_1.txt"
MakeDirCommand         =mkdir -p
RcCmpOptions           = 
RcCompilerName         =rc.exe /nologo
LinkOptions            =  
PCHCreateFlags         =
PCHUseFlags            =
IncludePath            = $(IncludeSwitch)"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.36.32532\include" $(IncludeSwitch)"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.36.32532\ATLMFC\include" $(IncludeSwitch)"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\VS\include" $(IncludeSwitch)"C:\Program Files (x86)\Windows Kits\10\include\10.0.22000.0\ucrt" $(IncludeSwitch)"C:\Program Files (x86)\Windows Kits\10\\include\10.0.22000.0\\um" $(IncludeSwitch)"C:\Program Files (x86)\Windows Kits\10\\include\10.0.22000.0\\shared" $(IncludeSwitch)"C:\Program Files (x86)\Windows Kits\10\\include\10.0.22000.0\\winrt" $(IncludeSwitch)"C:\Program Files (x86)\Windows Kits\10\\include\10.0.22000.0\\cppwinrt" $(IncludeSwitch)"C:\Program Files (x86)\Windows Kits\NETFXSDK\4.8\include\um"  $(IncludeSwitch). $(IncludeSwitch). 
RcIncludePath          = 
Libs                   = 
ArLibs                 =  
LibPath                =$(LibraryPathSwitch)"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.36.32532\ATLMFC\lib\x64" $(LibraryPathSwitch)"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.36.32532\lib\x64" $(LibraryPathSwitch)"C:\Program Files (x86)\Windows Kits\NETFXSDK\4.8\lib\um\x64" $(LibraryPathSwitch)"C:\Program Files (x86)\Windows Kits\10\lib\10.0.22000.0\ucrt\x64" $(LibraryPathSwitch)"C:\Program Files (x86)\Windows Kits\10\\lib\10.0.22000.0\\um\x64"  $(LibraryPathSwitch). 

##
## Common variables
## AR, CXX, CC, AS, CXXFLAGS and CFLAGS can be overridden using an environment variable
##
AR       = lib.exe /nologo
CXX      = cl.exe /nologo /TP /FC
CC       = cl.exe /nologo /TC /FC
CXXFLAGS =  -gdwarf-2 -O0 -Wall $(Preprocessors)
CFLAGS   =  -gdwarf-2 -O0 -Wall $(Preprocessors)
ASFLAGS  = 
AS       = ml.exe /nologo


##
## User defined environment variables
##
CodeLiteDir=C:\Program Files\CodeLite


##
## Object Targets Lists 
##
Objects0=$(IntermediateDirectory)\main.cpp$(ObjectSuffix) 



Objects=$(Objects0) 

##
## Main Build Targets 
##
all: $(OutputFile)

$(OutputFile): $(IntermediateDirectory)\.d $(Objects) 
	@$(MakeDirCommand) $(@D)
	@echo "" > $(IntermediateDirectory)\.d
	@echo $(Objects0)  > $(ObjectsFileList)
	$(LinkerName) $(OutputSwitch)$(OutputFile) @$(ObjectsFileList) $(LibPath) $(Libs) $(LinkOptions)
.PHONY: clean PrePreBuild PreBuild MakeIntermediateDirs all PostBuild 

MakeIntermediateDirs:
	@$(MakeDirCommand) "$(IntermediateDirectory)"
	@$(MakeDirCommand) "$(OutputDirectory)"


$(IntermediateDirectory)\.d:
	@echo Creating Intermediate Directory
	@$(MakeDirCommand) "$(IntermediateDirectory)"
	@echo Intermediate directories created
PreBuild:


##
## Objects
##
$(IntermediateDirectory)\main.cpp$(ObjectSuffix): main.cpp 
	$(CXX) $(PCHUseFlags) $(SourceSwitch) "C:\Users\actio\OneDrive\Pulpit\_learn\Kursy_C\codeLite_workspace\forst_work\forst_work_1\main.cpp" $(CXXFLAGS) $(ObjectSwitch)$(IntermediateDirectory)/main.cpp$(ObjectSuffix) $(IncludePath)
$(IntermediateDirectory)\main.cpp$(PreprocessSuffix): main.cpp
	$(CXX) $(CXXFLAGS) $(PCHUseFlags) $(IncludePath) $(PreprocessOnlySwitch) $(IntermediateDirectory)\main.cpp$(PreprocessSuffix) "main.cpp"

##
## Clean
##
clean:
	@if exist "$(IntermediateDirectory)" rmdir /S /Q "$(IntermediateDirectory)"


