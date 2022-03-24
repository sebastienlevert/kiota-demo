import {Featurecontrolsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeaturecontrolsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Featurecontrolsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Featurecontrolsetting();
}
