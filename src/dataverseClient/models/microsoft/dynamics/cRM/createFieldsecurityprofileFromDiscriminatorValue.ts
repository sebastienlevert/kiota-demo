import {Fieldsecurityprofile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFieldsecurityprofileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fieldsecurityprofile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fieldsecurityprofile();
}
