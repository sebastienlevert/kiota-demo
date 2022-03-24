import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_presenceFromDiscriminatorValue} from './createMsdyn_presenceFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_presence, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_omnichannelconfiguration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_dnd_presence_lookup_value?: string | undefined;
    private __msdyn_inactive_presence_lookup_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_defaultagentinputlanguage?: number | undefined;
    private _msdyn_dnd_presence_lookup?: Msdyn_presence | undefined;
    private _msdyn_enable_advance_entity_routing?: boolean | undefined;
    private _msdyn_enable_agent_reject_notifications?: boolean | undefined;
    private _msdyn_enable_missed_notifications?: boolean | undefined;
    private _msdyn_enable_new_consult_exp?: boolean | undefined;
    private _msdyn_enable_supervisor_assign?: boolean | undefined;
    private _msdyn_enable_supervisor_monitor?: boolean | undefined;
    private _msdyn_enable_supervisor_transfer?: boolean | undefined;
    private _msdyn_enable_unified_routing_diagnostic?: boolean | undefined;
    private _msdyn_enable_visitorjourney?: boolean | undefined;
    private _msdyn_enablemarkdown?: boolean | undefined;
    private _msdyn_enablenewconversationform?: boolean | undefined;
    private _msdyn_enablerealtimetranslation?: boolean | undefined;
    private _msdyn_enablesoundnotifications?: boolean | undefined;
    private _msdyn_inactive_presence_lookup?: Msdyn_presence | undefined;
    private _msdyn_isdefaultpersonamapped?: boolean | undefined;
    private _msdyn_ispersonalizationofsoundenabled?: boolean | undefined;
    private _msdyn_ispersonalmessagesenabled?: boolean | undefined;
    private _msdyn_ispersonasecurityrolemappingenabled?: boolean | undefined;
    private _msdyn_isskillbasedroutingenabled?: boolean | undefined;
    private _msdyn_isupdateskillsenabled?: boolean | undefined;
    private _msdyn_maskforagent?: boolean | undefined;
    private _msdyn_maskforcustomer?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_omnichannelconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_omnichannelconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_omnichannelconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_omnichannelconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_omnichannelconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_omnichannelconfiguration_ProcessSession?: Processsession[] | undefined;
    private _msdyn_omnichannelconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_omnichannelconfigurationid?: string | undefined;
    private _msdyn_soundformcontrol?: string | undefined;
    private _msdyn_translationwebresourceurl?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _msdyn_dnd_presence_lookup_value property value. 
     * @returns a string
     */
    public get _msdyn_dnd_presence_lookup_value() {
        return this.__msdyn_dnd_presence_lookup_value;
    };
    /**
     * Sets the _msdyn_dnd_presence_lookup_value property value. 
     * @param value Value to set for the _msdyn_dnd_presence_lookup_value property.
     */
    public set _msdyn_dnd_presence_lookup_value(value: string | undefined) {
        this.__msdyn_dnd_presence_lookup_value = value;
    };
    /**
     * Gets the _msdyn_inactive_presence_lookup_value property value. 
     * @returns a string
     */
    public get _msdyn_inactive_presence_lookup_value() {
        return this.__msdyn_inactive_presence_lookup_value;
    };
    /**
     * Sets the _msdyn_inactive_presence_lookup_value property value. 
     * @param value Value to set for the _msdyn_inactive_presence_lookup_value property.
     */
    public set _msdyn_inactive_presence_lookup_value(value: string | undefined) {
        this.__msdyn_inactive_presence_lookup_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Instantiates a new msdyn_omnichannelconfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_dnd_presence_lookup_value": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration)._msdyn_dnd_presence_lookup_value = n.getStringValue(); },
            "_msdyn_inactive_presence_lookup_value": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration)._msdyn_inactive_presence_lookup_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_defaultagentinputlanguage": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_defaultagentinputlanguage = n.getNumberValue(); },
            "msdyn_dnd_presence_lookup": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_dnd_presence_lookup = n.getObjectValue<Msdyn_presence>(createMsdyn_presenceFromDiscriminatorValue); },
            "msdyn_enable_advance_entity_routing": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enable_advance_entity_routing = n.getBooleanValue(); },
            "msdyn_enable_agent_reject_notifications": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enable_agent_reject_notifications = n.getBooleanValue(); },
            "msdyn_enable_missed_notifications": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enable_missed_notifications = n.getBooleanValue(); },
            "msdyn_enable_new_consult_exp": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enable_new_consult_exp = n.getBooleanValue(); },
            "msdyn_enable_supervisor_assign": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enable_supervisor_assign = n.getBooleanValue(); },
            "msdyn_enable_supervisor_monitor": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enable_supervisor_monitor = n.getBooleanValue(); },
            "msdyn_enable_supervisor_transfer": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enable_supervisor_transfer = n.getBooleanValue(); },
            "msdyn_enable_unified_routing_diagnostic": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enable_unified_routing_diagnostic = n.getBooleanValue(); },
            "msdyn_enable_visitorjourney": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enable_visitorjourney = n.getBooleanValue(); },
            "msdyn_enablemarkdown": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enablemarkdown = n.getBooleanValue(); },
            "msdyn_enablenewconversationform": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enablenewconversationform = n.getBooleanValue(); },
            "msdyn_enablerealtimetranslation": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enablerealtimetranslation = n.getBooleanValue(); },
            "msdyn_enablesoundnotifications": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_enablesoundnotifications = n.getBooleanValue(); },
            "msdyn_inactive_presence_lookup": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_inactive_presence_lookup = n.getObjectValue<Msdyn_presence>(createMsdyn_presenceFromDiscriminatorValue); },
            "msdyn_isdefaultpersonamapped": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_isdefaultpersonamapped = n.getBooleanValue(); },
            "msdyn_ispersonalizationofsoundenabled": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_ispersonalizationofsoundenabled = n.getBooleanValue(); },
            "msdyn_ispersonalmessagesenabled": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_ispersonalmessagesenabled = n.getBooleanValue(); },
            "msdyn_ispersonasecurityrolemappingenabled": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_ispersonasecurityrolemappingenabled = n.getBooleanValue(); },
            "msdyn_isskillbasedroutingenabled": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_isskillbasedroutingenabled = n.getBooleanValue(); },
            "msdyn_isupdateskillsenabled": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_isupdateskillsenabled = n.getBooleanValue(); },
            "msdyn_maskforagent": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_maskforagent = n.getBooleanValue(); },
            "msdyn_maskforcustomer": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_maskforcustomer = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_name = n.getStringValue(); },
            "msdyn_omnichannelconfiguration_AsyncOperations": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_omnichannelconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_omnichannelconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_omnichannelconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_omnichannelconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_omnichannelconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_omnichannelconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_omnichannelconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_omnichannelconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_omnichannelconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_omnichannelconfiguration_ProcessSession": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_omnichannelconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_omnichannelconfiguration_SyncErrors": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_omnichannelconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_omnichannelconfigurationid": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_omnichannelconfigurationid = n.getStringValue(); },
            "msdyn_soundformcontrol": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_soundformcontrol = n.getStringValue(); },
            "msdyn_translationwebresourceurl": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).msdyn_translationwebresourceurl = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_omnichannelconfiguration).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_defaultagentinputlanguage property value. 
     * @returns a integer
     */
    public get msdyn_defaultagentinputlanguage() {
        return this._msdyn_defaultagentinputlanguage;
    };
    /**
     * Sets the msdyn_defaultagentinputlanguage property value. 
     * @param value Value to set for the msdyn_defaultagentinputlanguage property.
     */
    public set msdyn_defaultagentinputlanguage(value: number | undefined) {
        this._msdyn_defaultagentinputlanguage = value;
    };
    /**
     * Gets the msdyn_dnd_presence_lookup property value. 
     * @returns a msdyn_presence
     */
    public get msdyn_dnd_presence_lookup() {
        return this._msdyn_dnd_presence_lookup;
    };
    /**
     * Sets the msdyn_dnd_presence_lookup property value. 
     * @param value Value to set for the msdyn_dnd_presence_lookup property.
     */
    public set msdyn_dnd_presence_lookup(value: Msdyn_presence | undefined) {
        this._msdyn_dnd_presence_lookup = value;
    };
    /**
     * Gets the msdyn_enable_advance_entity_routing property value. 
     * @returns a boolean
     */
    public get msdyn_enable_advance_entity_routing() {
        return this._msdyn_enable_advance_entity_routing;
    };
    /**
     * Sets the msdyn_enable_advance_entity_routing property value. 
     * @param value Value to set for the msdyn_enable_advance_entity_routing property.
     */
    public set msdyn_enable_advance_entity_routing(value: boolean | undefined) {
        this._msdyn_enable_advance_entity_routing = value;
    };
    /**
     * Gets the msdyn_enable_agent_reject_notifications property value. 
     * @returns a boolean
     */
    public get msdyn_enable_agent_reject_notifications() {
        return this._msdyn_enable_agent_reject_notifications;
    };
    /**
     * Sets the msdyn_enable_agent_reject_notifications property value. 
     * @param value Value to set for the msdyn_enable_agent_reject_notifications property.
     */
    public set msdyn_enable_agent_reject_notifications(value: boolean | undefined) {
        this._msdyn_enable_agent_reject_notifications = value;
    };
    /**
     * Gets the msdyn_enable_missed_notifications property value. 
     * @returns a boolean
     */
    public get msdyn_enable_missed_notifications() {
        return this._msdyn_enable_missed_notifications;
    };
    /**
     * Sets the msdyn_enable_missed_notifications property value. 
     * @param value Value to set for the msdyn_enable_missed_notifications property.
     */
    public set msdyn_enable_missed_notifications(value: boolean | undefined) {
        this._msdyn_enable_missed_notifications = value;
    };
    /**
     * Gets the msdyn_enable_new_consult_exp property value. 
     * @returns a boolean
     */
    public get msdyn_enable_new_consult_exp() {
        return this._msdyn_enable_new_consult_exp;
    };
    /**
     * Sets the msdyn_enable_new_consult_exp property value. 
     * @param value Value to set for the msdyn_enable_new_consult_exp property.
     */
    public set msdyn_enable_new_consult_exp(value: boolean | undefined) {
        this._msdyn_enable_new_consult_exp = value;
    };
    /**
     * Gets the msdyn_enable_supervisor_assign property value. 
     * @returns a boolean
     */
    public get msdyn_enable_supervisor_assign() {
        return this._msdyn_enable_supervisor_assign;
    };
    /**
     * Sets the msdyn_enable_supervisor_assign property value. 
     * @param value Value to set for the msdyn_enable_supervisor_assign property.
     */
    public set msdyn_enable_supervisor_assign(value: boolean | undefined) {
        this._msdyn_enable_supervisor_assign = value;
    };
    /**
     * Gets the msdyn_enable_supervisor_monitor property value. 
     * @returns a boolean
     */
    public get msdyn_enable_supervisor_monitor() {
        return this._msdyn_enable_supervisor_monitor;
    };
    /**
     * Sets the msdyn_enable_supervisor_monitor property value. 
     * @param value Value to set for the msdyn_enable_supervisor_monitor property.
     */
    public set msdyn_enable_supervisor_monitor(value: boolean | undefined) {
        this._msdyn_enable_supervisor_monitor = value;
    };
    /**
     * Gets the msdyn_enable_supervisor_transfer property value. 
     * @returns a boolean
     */
    public get msdyn_enable_supervisor_transfer() {
        return this._msdyn_enable_supervisor_transfer;
    };
    /**
     * Sets the msdyn_enable_supervisor_transfer property value. 
     * @param value Value to set for the msdyn_enable_supervisor_transfer property.
     */
    public set msdyn_enable_supervisor_transfer(value: boolean | undefined) {
        this._msdyn_enable_supervisor_transfer = value;
    };
    /**
     * Gets the msdyn_enable_unified_routing_diagnostic property value. 
     * @returns a boolean
     */
    public get msdyn_enable_unified_routing_diagnostic() {
        return this._msdyn_enable_unified_routing_diagnostic;
    };
    /**
     * Sets the msdyn_enable_unified_routing_diagnostic property value. 
     * @param value Value to set for the msdyn_enable_unified_routing_diagnostic property.
     */
    public set msdyn_enable_unified_routing_diagnostic(value: boolean | undefined) {
        this._msdyn_enable_unified_routing_diagnostic = value;
    };
    /**
     * Gets the msdyn_enable_visitorjourney property value. 
     * @returns a boolean
     */
    public get msdyn_enable_visitorjourney() {
        return this._msdyn_enable_visitorjourney;
    };
    /**
     * Sets the msdyn_enable_visitorjourney property value. 
     * @param value Value to set for the msdyn_enable_visitorjourney property.
     */
    public set msdyn_enable_visitorjourney(value: boolean | undefined) {
        this._msdyn_enable_visitorjourney = value;
    };
    /**
     * Gets the msdyn_enablemarkdown property value. 
     * @returns a boolean
     */
    public get msdyn_enablemarkdown() {
        return this._msdyn_enablemarkdown;
    };
    /**
     * Sets the msdyn_enablemarkdown property value. 
     * @param value Value to set for the msdyn_enablemarkdown property.
     */
    public set msdyn_enablemarkdown(value: boolean | undefined) {
        this._msdyn_enablemarkdown = value;
    };
    /**
     * Gets the msdyn_enablenewconversationform property value. 
     * @returns a boolean
     */
    public get msdyn_enablenewconversationform() {
        return this._msdyn_enablenewconversationform;
    };
    /**
     * Sets the msdyn_enablenewconversationform property value. 
     * @param value Value to set for the msdyn_enablenewconversationform property.
     */
    public set msdyn_enablenewconversationform(value: boolean | undefined) {
        this._msdyn_enablenewconversationform = value;
    };
    /**
     * Gets the msdyn_enablerealtimetranslation property value. 
     * @returns a boolean
     */
    public get msdyn_enablerealtimetranslation() {
        return this._msdyn_enablerealtimetranslation;
    };
    /**
     * Sets the msdyn_enablerealtimetranslation property value. 
     * @param value Value to set for the msdyn_enablerealtimetranslation property.
     */
    public set msdyn_enablerealtimetranslation(value: boolean | undefined) {
        this._msdyn_enablerealtimetranslation = value;
    };
    /**
     * Gets the msdyn_enablesoundnotifications property value. 
     * @returns a boolean
     */
    public get msdyn_enablesoundnotifications() {
        return this._msdyn_enablesoundnotifications;
    };
    /**
     * Sets the msdyn_enablesoundnotifications property value. 
     * @param value Value to set for the msdyn_enablesoundnotifications property.
     */
    public set msdyn_enablesoundnotifications(value: boolean | undefined) {
        this._msdyn_enablesoundnotifications = value;
    };
    /**
     * Gets the msdyn_inactive_presence_lookup property value. 
     * @returns a msdyn_presence
     */
    public get msdyn_inactive_presence_lookup() {
        return this._msdyn_inactive_presence_lookup;
    };
    /**
     * Sets the msdyn_inactive_presence_lookup property value. 
     * @param value Value to set for the msdyn_inactive_presence_lookup property.
     */
    public set msdyn_inactive_presence_lookup(value: Msdyn_presence | undefined) {
        this._msdyn_inactive_presence_lookup = value;
    };
    /**
     * Gets the msdyn_isdefaultpersonamapped property value. 
     * @returns a boolean
     */
    public get msdyn_isdefaultpersonamapped() {
        return this._msdyn_isdefaultpersonamapped;
    };
    /**
     * Sets the msdyn_isdefaultpersonamapped property value. 
     * @param value Value to set for the msdyn_isdefaultpersonamapped property.
     */
    public set msdyn_isdefaultpersonamapped(value: boolean | undefined) {
        this._msdyn_isdefaultpersonamapped = value;
    };
    /**
     * Gets the msdyn_ispersonalizationofsoundenabled property value. 
     * @returns a boolean
     */
    public get msdyn_ispersonalizationofsoundenabled() {
        return this._msdyn_ispersonalizationofsoundenabled;
    };
    /**
     * Sets the msdyn_ispersonalizationofsoundenabled property value. 
     * @param value Value to set for the msdyn_ispersonalizationofsoundenabled property.
     */
    public set msdyn_ispersonalizationofsoundenabled(value: boolean | undefined) {
        this._msdyn_ispersonalizationofsoundenabled = value;
    };
    /**
     * Gets the msdyn_ispersonalmessagesenabled property value. 
     * @returns a boolean
     */
    public get msdyn_ispersonalmessagesenabled() {
        return this._msdyn_ispersonalmessagesenabled;
    };
    /**
     * Sets the msdyn_ispersonalmessagesenabled property value. 
     * @param value Value to set for the msdyn_ispersonalmessagesenabled property.
     */
    public set msdyn_ispersonalmessagesenabled(value: boolean | undefined) {
        this._msdyn_ispersonalmessagesenabled = value;
    };
    /**
     * Gets the msdyn_ispersonasecurityrolemappingenabled property value. 
     * @returns a boolean
     */
    public get msdyn_ispersonasecurityrolemappingenabled() {
        return this._msdyn_ispersonasecurityrolemappingenabled;
    };
    /**
     * Sets the msdyn_ispersonasecurityrolemappingenabled property value. 
     * @param value Value to set for the msdyn_ispersonasecurityrolemappingenabled property.
     */
    public set msdyn_ispersonasecurityrolemappingenabled(value: boolean | undefined) {
        this._msdyn_ispersonasecurityrolemappingenabled = value;
    };
    /**
     * Gets the msdyn_isskillbasedroutingenabled property value. 
     * @returns a boolean
     */
    public get msdyn_isskillbasedroutingenabled() {
        return this._msdyn_isskillbasedroutingenabled;
    };
    /**
     * Sets the msdyn_isskillbasedroutingenabled property value. 
     * @param value Value to set for the msdyn_isskillbasedroutingenabled property.
     */
    public set msdyn_isskillbasedroutingenabled(value: boolean | undefined) {
        this._msdyn_isskillbasedroutingenabled = value;
    };
    /**
     * Gets the msdyn_isupdateskillsenabled property value. 
     * @returns a boolean
     */
    public get msdyn_isupdateskillsenabled() {
        return this._msdyn_isupdateskillsenabled;
    };
    /**
     * Sets the msdyn_isupdateskillsenabled property value. 
     * @param value Value to set for the msdyn_isupdateskillsenabled property.
     */
    public set msdyn_isupdateskillsenabled(value: boolean | undefined) {
        this._msdyn_isupdateskillsenabled = value;
    };
    /**
     * Gets the msdyn_maskforagent property value. 
     * @returns a boolean
     */
    public get msdyn_maskforagent() {
        return this._msdyn_maskforagent;
    };
    /**
     * Sets the msdyn_maskforagent property value. 
     * @param value Value to set for the msdyn_maskforagent property.
     */
    public set msdyn_maskforagent(value: boolean | undefined) {
        this._msdyn_maskforagent = value;
    };
    /**
     * Gets the msdyn_maskforcustomer property value. 
     * @returns a boolean
     */
    public get msdyn_maskforcustomer() {
        return this._msdyn_maskforcustomer;
    };
    /**
     * Sets the msdyn_maskforcustomer property value. 
     * @param value Value to set for the msdyn_maskforcustomer property.
     */
    public set msdyn_maskforcustomer(value: boolean | undefined) {
        this._msdyn_maskforcustomer = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_omnichannelconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_omnichannelconfiguration_AsyncOperations() {
        return this._msdyn_omnichannelconfiguration_AsyncOperations;
    };
    /**
     * Sets the msdyn_omnichannelconfiguration_AsyncOperations property value. 
     * @param value Value to set for the msdyn_omnichannelconfiguration_AsyncOperations property.
     */
    public set msdyn_omnichannelconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_omnichannelconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_omnichannelconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_omnichannelconfiguration_BulkDeleteFailures() {
        return this._msdyn_omnichannelconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_omnichannelconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_omnichannelconfiguration_BulkDeleteFailures property.
     */
    public set msdyn_omnichannelconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_omnichannelconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_omnichannelconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_omnichannelconfiguration_DuplicateBaseRecord() {
        return this._msdyn_omnichannelconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_omnichannelconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_omnichannelconfiguration_DuplicateBaseRecord property.
     */
    public set msdyn_omnichannelconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_omnichannelconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_omnichannelconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_omnichannelconfiguration_DuplicateMatchingRecord() {
        return this._msdyn_omnichannelconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_omnichannelconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_omnichannelconfiguration_DuplicateMatchingRecord property.
     */
    public set msdyn_omnichannelconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_omnichannelconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_omnichannelconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_omnichannelconfiguration_MailboxTrackingFolders() {
        return this._msdyn_omnichannelconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_omnichannelconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_omnichannelconfiguration_MailboxTrackingFolders property.
     */
    public set msdyn_omnichannelconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_omnichannelconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses() {
        return this._msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_omnichannelconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_omnichannelconfiguration_ProcessSession() {
        return this._msdyn_omnichannelconfiguration_ProcessSession;
    };
    /**
     * Sets the msdyn_omnichannelconfiguration_ProcessSession property value. 
     * @param value Value to set for the msdyn_omnichannelconfiguration_ProcessSession property.
     */
    public set msdyn_omnichannelconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_omnichannelconfiguration_ProcessSession = value;
    };
    /**
     * Gets the msdyn_omnichannelconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_omnichannelconfiguration_SyncErrors() {
        return this._msdyn_omnichannelconfiguration_SyncErrors;
    };
    /**
     * Sets the msdyn_omnichannelconfiguration_SyncErrors property value. 
     * @param value Value to set for the msdyn_omnichannelconfiguration_SyncErrors property.
     */
    public set msdyn_omnichannelconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_omnichannelconfiguration_SyncErrors = value;
    };
    /**
     * Gets the msdyn_omnichannelconfigurationid property value. 
     * @returns a string
     */
    public get msdyn_omnichannelconfigurationid() {
        return this._msdyn_omnichannelconfigurationid;
    };
    /**
     * Sets the msdyn_omnichannelconfigurationid property value. 
     * @param value Value to set for the msdyn_omnichannelconfigurationid property.
     */
    public set msdyn_omnichannelconfigurationid(value: string | undefined) {
        this._msdyn_omnichannelconfigurationid = value;
    };
    /**
     * Gets the msdyn_soundformcontrol property value. 
     * @returns a string
     */
    public get msdyn_soundformcontrol() {
        return this._msdyn_soundformcontrol;
    };
    /**
     * Sets the msdyn_soundformcontrol property value. 
     * @param value Value to set for the msdyn_soundformcontrol property.
     */
    public set msdyn_soundformcontrol(value: string | undefined) {
        this._msdyn_soundformcontrol = value;
    };
    /**
     * Gets the msdyn_translationwebresourceurl property value. 
     * @returns a string
     */
    public get msdyn_translationwebresourceurl() {
        return this._msdyn_translationwebresourceurl;
    };
    /**
     * Sets the msdyn_translationwebresourceurl property value. 
     * @param value Value to set for the msdyn_translationwebresourceurl property.
     */
    public set msdyn_translationwebresourceurl(value: string | undefined) {
        this._msdyn_translationwebresourceurl = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_dnd_presence_lookup_value", this._msdyn_dnd_presence_lookup_value);
        writer.writeStringValue("_msdyn_inactive_presence_lookup_value", this._msdyn_inactive_presence_lookup_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_defaultagentinputlanguage", this.msdyn_defaultagentinputlanguage);
        writer.writeObjectValue<Msdyn_presence>("msdyn_dnd_presence_lookup", this.msdyn_dnd_presence_lookup);
        writer.writeBooleanValue("msdyn_enable_advance_entity_routing", this.msdyn_enable_advance_entity_routing);
        writer.writeBooleanValue("msdyn_enable_agent_reject_notifications", this.msdyn_enable_agent_reject_notifications);
        writer.writeBooleanValue("msdyn_enable_missed_notifications", this.msdyn_enable_missed_notifications);
        writer.writeBooleanValue("msdyn_enable_new_consult_exp", this.msdyn_enable_new_consult_exp);
        writer.writeBooleanValue("msdyn_enable_supervisor_assign", this.msdyn_enable_supervisor_assign);
        writer.writeBooleanValue("msdyn_enable_supervisor_monitor", this.msdyn_enable_supervisor_monitor);
        writer.writeBooleanValue("msdyn_enable_supervisor_transfer", this.msdyn_enable_supervisor_transfer);
        writer.writeBooleanValue("msdyn_enable_unified_routing_diagnostic", this.msdyn_enable_unified_routing_diagnostic);
        writer.writeBooleanValue("msdyn_enable_visitorjourney", this.msdyn_enable_visitorjourney);
        writer.writeBooleanValue("msdyn_enablemarkdown", this.msdyn_enablemarkdown);
        writer.writeBooleanValue("msdyn_enablenewconversationform", this.msdyn_enablenewconversationform);
        writer.writeBooleanValue("msdyn_enablerealtimetranslation", this.msdyn_enablerealtimetranslation);
        writer.writeBooleanValue("msdyn_enablesoundnotifications", this.msdyn_enablesoundnotifications);
        writer.writeObjectValue<Msdyn_presence>("msdyn_inactive_presence_lookup", this.msdyn_inactive_presence_lookup);
        writer.writeBooleanValue("msdyn_isdefaultpersonamapped", this.msdyn_isdefaultpersonamapped);
        writer.writeBooleanValue("msdyn_ispersonalizationofsoundenabled", this.msdyn_ispersonalizationofsoundenabled);
        writer.writeBooleanValue("msdyn_ispersonalmessagesenabled", this.msdyn_ispersonalmessagesenabled);
        writer.writeBooleanValue("msdyn_ispersonasecurityrolemappingenabled", this.msdyn_ispersonasecurityrolemappingenabled);
        writer.writeBooleanValue("msdyn_isskillbasedroutingenabled", this.msdyn_isskillbasedroutingenabled);
        writer.writeBooleanValue("msdyn_isupdateskillsenabled", this.msdyn_isupdateskillsenabled);
        writer.writeBooleanValue("msdyn_maskforagent", this.msdyn_maskforagent);
        writer.writeBooleanValue("msdyn_maskforcustomer", this.msdyn_maskforcustomer);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_omnichannelconfiguration_AsyncOperations", this.msdyn_omnichannelconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_omnichannelconfiguration_BulkDeleteFailures", this.msdyn_omnichannelconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_omnichannelconfiguration_DuplicateBaseRecord", this.msdyn_omnichannelconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_omnichannelconfiguration_DuplicateMatchingRecord", this.msdyn_omnichannelconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_omnichannelconfiguration_MailboxTrackingFolders", this.msdyn_omnichannelconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses", this.msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_omnichannelconfiguration_ProcessSession", this.msdyn_omnichannelconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_omnichannelconfiguration_SyncErrors", this.msdyn_omnichannelconfiguration_SyncErrors);
        writer.writeStringValue("msdyn_omnichannelconfigurationid", this.msdyn_omnichannelconfigurationid);
        writer.writeStringValue("msdyn_soundformcontrol", this.msdyn_soundformcontrol);
        writer.writeStringValue("msdyn_translationwebresourceurl", this.msdyn_translationwebresourceurl);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
