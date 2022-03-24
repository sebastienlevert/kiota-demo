import {Msdyn_surveyquestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_surveyquestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_surveyquestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_surveyquestion();
}
