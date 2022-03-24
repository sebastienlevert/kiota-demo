import {Stagesolutionupload} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStagesolutionuploadFromDiscriminatorValue(parseNode: ParseNode | undefined) : Stagesolutionupload {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Stagesolutionupload();
}
