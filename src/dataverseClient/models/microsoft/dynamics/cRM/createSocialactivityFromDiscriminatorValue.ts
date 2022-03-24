import {Socialactivity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSocialactivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Socialactivity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Socialactivity();
}
