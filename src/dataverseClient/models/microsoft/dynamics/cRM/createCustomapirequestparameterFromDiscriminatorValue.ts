import {Customapirequestparameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomapirequestparameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Customapirequestparameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Customapirequestparameter();
}
