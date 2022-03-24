import {Msdyn_localizedsurveyquestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_localizedsurveyquestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_localizedsurveyquestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_localizedsurveyquestion();
}
