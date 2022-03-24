import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyusd_agentscriptactionFromDiscriminatorValue} from './createMsdyusd_agentscriptactionFromDiscriminatorValue';
import {createMsdyusd_answerFromDiscriminatorValue} from './createMsdyusd_answerFromDiscriminatorValue';
import {createMsdyusd_configurationFromDiscriminatorValue} from './createMsdyusd_configurationFromDiscriminatorValue';
import {createMsdyusd_taskFromDiscriminatorValue} from './createMsdyusd_taskFromDiscriminatorValue';
import {createMsdyusd_toolbarbuttonFromDiscriminatorValue} from './createMsdyusd_toolbarbuttonFromDiscriminatorValue';
import {createMsdyusd_uiieventFromDiscriminatorValue} from './createMsdyusd_uiieventFromDiscriminatorValue';
import {createMsdyusd_windowrouteFromDiscriminatorValue} from './createMsdyusd_windowrouteFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createUii_actionFromDiscriminatorValue} from './createUii_actionFromDiscriminatorValue';
import {createUii_hostedapplicationFromDiscriminatorValue} from './createUii_hostedapplicationFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyusd_answer, Msdyusd_configuration, Msdyusd_task, Msdyusd_toolbarbutton, Msdyusd_uiievent, Msdyusd_windowroute, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Uii_action, Uii_hostedapplication} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyusd_agentscriptaction extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyusd_action_value?: string | undefined;
    private __msdyusd_application_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyusd_Action?: Uii_action | undefined;
    private _msdyusd_actiondata?: string | undefined;
    private _msdyusd_agentscriptaction_Annotations?: Annotation[] | undefined;
    private _msdyusd_agentscriptaction_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyusd_agentscriptaction_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyusd_agentscriptaction_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyusd_agentscriptaction_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyusd_agentscriptaction_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyusd_agentscriptaction_ProcessSession?: Processsession[] | undefined;
    private _msdyusd_agentscriptaction_SyncErrors?: Syncerror[] | undefined;
    private _msdyusd_agentscriptaction_windowroute_ApplicationAction?: Msdyusd_windowroute[] | undefined;
    private _msdyusd_agentscriptaction_windowroute_MultipleMatches?: Msdyusd_windowroute[] | undefined;
    private _msdyusd_agentscriptaction_windowroute_NoMatchesAction?: Msdyusd_windowroute[] | undefined;
    private _msdyusd_agentscriptaction_windowroute_SingleMatchAction?: Msdyusd_windowroute[] | undefined;
    private _msdyusd_agentscriptactionid?: string | undefined;
    private _msdyusd_answer_agentscriptaction?: Msdyusd_answer[] | undefined;
    private _msdyusd_Application?: Uii_hostedapplication | undefined;
    private _msdyusd_condition?: string | undefined;
    private _msdyusd_configuration_actioncalls?: Msdyusd_configuration[] | undefined;
    private _msdyusd_launchifdynamic?: boolean | undefined;
    private _msdyusd_name?: string | undefined;
    private _msdyusd_order?: number | undefined;
    private _msdyusd_shortcutkey?: string | undefined;
    private _msdyusd_subactioncalls?: Msdyusd_agentscriptaction[] | undefined;
    private _msdyusd_subactioncalls_referenced?: Msdyusd_agentscriptaction[] | undefined;
    private _msdyusd_task_agentscriptaction?: Msdyusd_task[] | undefined;
    private _msdyusd_toolbarbutton_agentscriptaction?: Msdyusd_toolbarbutton[] | undefined;
    private _msdyusd_uiievent_agentscriptaction?: Msdyusd_uiievent[] | undefined;
    private _msdyusd_windowroute_agentscriptaction?: Msdyusd_windowroute[] | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msdyusd_action_value property value. 
     * @returns a string
     */
    public get _msdyusd_action_value() {
        return this.__msdyusd_action_value;
    };
    /**
     * Sets the _msdyusd_action_value property value. 
     * @param value Value to set for the _msdyusd_action_value property.
     */
    public set _msdyusd_action_value(value: string | undefined) {
        this.__msdyusd_action_value = value;
    };
    /**
     * Gets the _msdyusd_application_value property value. 
     * @returns a string
     */
    public get _msdyusd_application_value() {
        return this.__msdyusd_application_value;
    };
    /**
     * Sets the _msdyusd_application_value property value. 
     * @param value Value to set for the _msdyusd_application_value property.
     */
    public set _msdyusd_application_value(value: string | undefined) {
        this.__msdyusd_application_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new msdyusd_agentscriptaction and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyusd_agentscriptaction)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_agentscriptaction)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyusd_agentscriptaction)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_agentscriptaction)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyusd_action_value": (o, n) => { (o as unknown as Msdyusd_agentscriptaction)._msdyusd_action_value = n.getStringValue(); },
            "_msdyusd_application_value": (o, n) => { (o as unknown as Msdyusd_agentscriptaction)._msdyusd_application_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyusd_agentscriptaction)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyusd_agentscriptaction)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyusd_agentscriptaction)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyusd_agentscriptaction)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyusd_Action": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_Action = n.getObjectValue<Uii_action>(createUii_actionFromDiscriminatorValue); },
            "msdyusd_actiondata": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_actiondata = n.getStringValue(); },
            "msdyusd_agentscriptaction_Annotations": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_AsyncOperations": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_ProcessSession": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_SyncErrors": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_windowroute_ApplicationAction": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_windowroute_ApplicationAction = n.getCollectionOfObjectValues<Msdyusd_windowroute>(createMsdyusd_windowrouteFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_windowroute_MultipleMatches": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_windowroute_MultipleMatches = n.getCollectionOfObjectValues<Msdyusd_windowroute>(createMsdyusd_windowrouteFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_windowroute_NoMatchesAction": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_windowroute_NoMatchesAction = n.getCollectionOfObjectValues<Msdyusd_windowroute>(createMsdyusd_windowrouteFromDiscriminatorValue); },
            "msdyusd_agentscriptaction_windowroute_SingleMatchAction": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptaction_windowroute_SingleMatchAction = n.getCollectionOfObjectValues<Msdyusd_windowroute>(createMsdyusd_windowrouteFromDiscriminatorValue); },
            "msdyusd_agentscriptactionid": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_agentscriptactionid = n.getStringValue(); },
            "msdyusd_answer_agentscriptaction": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_answer_agentscriptaction = n.getCollectionOfObjectValues<Msdyusd_answer>(createMsdyusd_answerFromDiscriminatorValue); },
            "msdyusd_Application": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_Application = n.getObjectValue<Uii_hostedapplication>(createUii_hostedapplicationFromDiscriminatorValue); },
            "msdyusd_condition": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_condition = n.getStringValue(); },
            "msdyusd_configuration_actioncalls": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_configuration_actioncalls = n.getCollectionOfObjectValues<Msdyusd_configuration>(createMsdyusd_configurationFromDiscriminatorValue); },
            "msdyusd_launchifdynamic": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_launchifdynamic = n.getBooleanValue(); },
            "msdyusd_name": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_name = n.getStringValue(); },
            "msdyusd_order": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_order = n.getNumberValue(); },
            "msdyusd_shortcutkey": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_shortcutkey = n.getStringValue(); },
            "msdyusd_subactioncalls": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_subactioncalls = n.getCollectionOfObjectValues<Msdyusd_agentscriptaction>(createMsdyusd_agentscriptactionFromDiscriminatorValue); },
            "msdyusd_subactioncalls_referenced": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_subactioncalls_referenced = n.getCollectionOfObjectValues<Msdyusd_agentscriptaction>(createMsdyusd_agentscriptactionFromDiscriminatorValue); },
            "msdyusd_task_agentscriptaction": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_task_agentscriptaction = n.getCollectionOfObjectValues<Msdyusd_task>(createMsdyusd_taskFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_agentscriptaction": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_toolbarbutton_agentscriptaction = n.getCollectionOfObjectValues<Msdyusd_toolbarbutton>(createMsdyusd_toolbarbuttonFromDiscriminatorValue); },
            "msdyusd_uiievent_agentscriptaction": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_uiievent_agentscriptaction = n.getCollectionOfObjectValues<Msdyusd_uiievent>(createMsdyusd_uiieventFromDiscriminatorValue); },
            "msdyusd_windowroute_agentscriptaction": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).msdyusd_windowroute_agentscriptaction = n.getCollectionOfObjectValues<Msdyusd_windowroute>(createMsdyusd_windowrouteFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyusd_agentscriptaction).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyusd_Action property value. 
     * @returns a uii_action
     */
    public get msdyusd_Action() {
        return this._msdyusd_Action;
    };
    /**
     * Sets the msdyusd_Action property value. 
     * @param value Value to set for the msdyusd_Action property.
     */
    public set msdyusd_Action(value: Uii_action | undefined) {
        this._msdyusd_Action = value;
    };
    /**
     * Gets the msdyusd_actiondata property value. 
     * @returns a string
     */
    public get msdyusd_actiondata() {
        return this._msdyusd_actiondata;
    };
    /**
     * Sets the msdyusd_actiondata property value. 
     * @param value Value to set for the msdyusd_actiondata property.
     */
    public set msdyusd_actiondata(value: string | undefined) {
        this._msdyusd_actiondata = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_Annotations property value. 
     * @returns a annotation
     */
    public get msdyusd_agentscriptaction_Annotations() {
        return this._msdyusd_agentscriptaction_Annotations;
    };
    /**
     * Sets the msdyusd_agentscriptaction_Annotations property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_Annotations property.
     */
    public set msdyusd_agentscriptaction_Annotations(value: Annotation[] | undefined) {
        this._msdyusd_agentscriptaction_Annotations = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyusd_agentscriptaction_AsyncOperations() {
        return this._msdyusd_agentscriptaction_AsyncOperations;
    };
    /**
     * Sets the msdyusd_agentscriptaction_AsyncOperations property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_AsyncOperations property.
     */
    public set msdyusd_agentscriptaction_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyusd_agentscriptaction_AsyncOperations = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyusd_agentscriptaction_BulkDeleteFailures() {
        return this._msdyusd_agentscriptaction_BulkDeleteFailures;
    };
    /**
     * Sets the msdyusd_agentscriptaction_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_BulkDeleteFailures property.
     */
    public set msdyusd_agentscriptaction_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyusd_agentscriptaction_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyusd_agentscriptaction_DuplicateBaseRecord() {
        return this._msdyusd_agentscriptaction_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyusd_agentscriptaction_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_DuplicateBaseRecord property.
     */
    public set msdyusd_agentscriptaction_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyusd_agentscriptaction_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyusd_agentscriptaction_DuplicateMatchingRecord() {
        return this._msdyusd_agentscriptaction_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyusd_agentscriptaction_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_DuplicateMatchingRecord property.
     */
    public set msdyusd_agentscriptaction_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyusd_agentscriptaction_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyusd_agentscriptaction_MailboxTrackingFolders() {
        return this._msdyusd_agentscriptaction_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyusd_agentscriptaction_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_MailboxTrackingFolders property.
     */
    public set msdyusd_agentscriptaction_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyusd_agentscriptaction_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses() {
        return this._msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses property.
     */
    public set msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyusd_agentscriptaction_ProcessSession() {
        return this._msdyusd_agentscriptaction_ProcessSession;
    };
    /**
     * Sets the msdyusd_agentscriptaction_ProcessSession property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_ProcessSession property.
     */
    public set msdyusd_agentscriptaction_ProcessSession(value: Processsession[] | undefined) {
        this._msdyusd_agentscriptaction_ProcessSession = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyusd_agentscriptaction_SyncErrors() {
        return this._msdyusd_agentscriptaction_SyncErrors;
    };
    /**
     * Sets the msdyusd_agentscriptaction_SyncErrors property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_SyncErrors property.
     */
    public set msdyusd_agentscriptaction_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyusd_agentscriptaction_SyncErrors = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_windowroute_ApplicationAction property value. 
     * @returns a msdyusd_windowroute
     */
    public get msdyusd_agentscriptaction_windowroute_ApplicationAction() {
        return this._msdyusd_agentscriptaction_windowroute_ApplicationAction;
    };
    /**
     * Sets the msdyusd_agentscriptaction_windowroute_ApplicationAction property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_windowroute_ApplicationAction property.
     */
    public set msdyusd_agentscriptaction_windowroute_ApplicationAction(value: Msdyusd_windowroute[] | undefined) {
        this._msdyusd_agentscriptaction_windowroute_ApplicationAction = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_windowroute_MultipleMatches property value. 
     * @returns a msdyusd_windowroute
     */
    public get msdyusd_agentscriptaction_windowroute_MultipleMatches() {
        return this._msdyusd_agentscriptaction_windowroute_MultipleMatches;
    };
    /**
     * Sets the msdyusd_agentscriptaction_windowroute_MultipleMatches property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_windowroute_MultipleMatches property.
     */
    public set msdyusd_agentscriptaction_windowroute_MultipleMatches(value: Msdyusd_windowroute[] | undefined) {
        this._msdyusd_agentscriptaction_windowroute_MultipleMatches = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_windowroute_NoMatchesAction property value. 
     * @returns a msdyusd_windowroute
     */
    public get msdyusd_agentscriptaction_windowroute_NoMatchesAction() {
        return this._msdyusd_agentscriptaction_windowroute_NoMatchesAction;
    };
    /**
     * Sets the msdyusd_agentscriptaction_windowroute_NoMatchesAction property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_windowroute_NoMatchesAction property.
     */
    public set msdyusd_agentscriptaction_windowroute_NoMatchesAction(value: Msdyusd_windowroute[] | undefined) {
        this._msdyusd_agentscriptaction_windowroute_NoMatchesAction = value;
    };
    /**
     * Gets the msdyusd_agentscriptaction_windowroute_SingleMatchAction property value. 
     * @returns a msdyusd_windowroute
     */
    public get msdyusd_agentscriptaction_windowroute_SingleMatchAction() {
        return this._msdyusd_agentscriptaction_windowroute_SingleMatchAction;
    };
    /**
     * Sets the msdyusd_agentscriptaction_windowroute_SingleMatchAction property value. 
     * @param value Value to set for the msdyusd_agentscriptaction_windowroute_SingleMatchAction property.
     */
    public set msdyusd_agentscriptaction_windowroute_SingleMatchAction(value: Msdyusd_windowroute[] | undefined) {
        this._msdyusd_agentscriptaction_windowroute_SingleMatchAction = value;
    };
    /**
     * Gets the msdyusd_agentscriptactionid property value. 
     * @returns a string
     */
    public get msdyusd_agentscriptactionid() {
        return this._msdyusd_agentscriptactionid;
    };
    /**
     * Sets the msdyusd_agentscriptactionid property value. 
     * @param value Value to set for the msdyusd_agentscriptactionid property.
     */
    public set msdyusd_agentscriptactionid(value: string | undefined) {
        this._msdyusd_agentscriptactionid = value;
    };
    /**
     * Gets the msdyusd_answer_agentscriptaction property value. 
     * @returns a msdyusd_answer
     */
    public get msdyusd_answer_agentscriptaction() {
        return this._msdyusd_answer_agentscriptaction;
    };
    /**
     * Sets the msdyusd_answer_agentscriptaction property value. 
     * @param value Value to set for the msdyusd_answer_agentscriptaction property.
     */
    public set msdyusd_answer_agentscriptaction(value: Msdyusd_answer[] | undefined) {
        this._msdyusd_answer_agentscriptaction = value;
    };
    /**
     * Gets the msdyusd_Application property value. 
     * @returns a uii_hostedapplication
     */
    public get msdyusd_Application() {
        return this._msdyusd_Application;
    };
    /**
     * Sets the msdyusd_Application property value. 
     * @param value Value to set for the msdyusd_Application property.
     */
    public set msdyusd_Application(value: Uii_hostedapplication | undefined) {
        this._msdyusd_Application = value;
    };
    /**
     * Gets the msdyusd_condition property value. 
     * @returns a string
     */
    public get msdyusd_condition() {
        return this._msdyusd_condition;
    };
    /**
     * Sets the msdyusd_condition property value. 
     * @param value Value to set for the msdyusd_condition property.
     */
    public set msdyusd_condition(value: string | undefined) {
        this._msdyusd_condition = value;
    };
    /**
     * Gets the msdyusd_configuration_actioncalls property value. 
     * @returns a msdyusd_configuration
     */
    public get msdyusd_configuration_actioncalls() {
        return this._msdyusd_configuration_actioncalls;
    };
    /**
     * Sets the msdyusd_configuration_actioncalls property value. 
     * @param value Value to set for the msdyusd_configuration_actioncalls property.
     */
    public set msdyusd_configuration_actioncalls(value: Msdyusd_configuration[] | undefined) {
        this._msdyusd_configuration_actioncalls = value;
    };
    /**
     * Gets the msdyusd_launchifdynamic property value. 
     * @returns a boolean
     */
    public get msdyusd_launchifdynamic() {
        return this._msdyusd_launchifdynamic;
    };
    /**
     * Sets the msdyusd_launchifdynamic property value. 
     * @param value Value to set for the msdyusd_launchifdynamic property.
     */
    public set msdyusd_launchifdynamic(value: boolean | undefined) {
        this._msdyusd_launchifdynamic = value;
    };
    /**
     * Gets the msdyusd_name property value. 
     * @returns a string
     */
    public get msdyusd_name() {
        return this._msdyusd_name;
    };
    /**
     * Sets the msdyusd_name property value. 
     * @param value Value to set for the msdyusd_name property.
     */
    public set msdyusd_name(value: string | undefined) {
        this._msdyusd_name = value;
    };
    /**
     * Gets the msdyusd_order property value. 
     * @returns a integer
     */
    public get msdyusd_order() {
        return this._msdyusd_order;
    };
    /**
     * Sets the msdyusd_order property value. 
     * @param value Value to set for the msdyusd_order property.
     */
    public set msdyusd_order(value: number | undefined) {
        this._msdyusd_order = value;
    };
    /**
     * Gets the msdyusd_shortcutkey property value. 
     * @returns a string
     */
    public get msdyusd_shortcutkey() {
        return this._msdyusd_shortcutkey;
    };
    /**
     * Sets the msdyusd_shortcutkey property value. 
     * @param value Value to set for the msdyusd_shortcutkey property.
     */
    public set msdyusd_shortcutkey(value: string | undefined) {
        this._msdyusd_shortcutkey = value;
    };
    /**
     * Gets the msdyusd_subactioncalls property value. 
     * @returns a msdyusd_agentscriptaction
     */
    public get msdyusd_subactioncalls() {
        return this._msdyusd_subactioncalls;
    };
    /**
     * Sets the msdyusd_subactioncalls property value. 
     * @param value Value to set for the msdyusd_subactioncalls property.
     */
    public set msdyusd_subactioncalls(value: Msdyusd_agentscriptaction[] | undefined) {
        this._msdyusd_subactioncalls = value;
    };
    /**
     * Gets the msdyusd_subactioncalls_referenced property value. 
     * @returns a msdyusd_agentscriptaction
     */
    public get msdyusd_subactioncalls_referenced() {
        return this._msdyusd_subactioncalls_referenced;
    };
    /**
     * Sets the msdyusd_subactioncalls_referenced property value. 
     * @param value Value to set for the msdyusd_subactioncalls_referenced property.
     */
    public set msdyusd_subactioncalls_referenced(value: Msdyusd_agentscriptaction[] | undefined) {
        this._msdyusd_subactioncalls_referenced = value;
    };
    /**
     * Gets the msdyusd_task_agentscriptaction property value. 
     * @returns a msdyusd_task
     */
    public get msdyusd_task_agentscriptaction() {
        return this._msdyusd_task_agentscriptaction;
    };
    /**
     * Sets the msdyusd_task_agentscriptaction property value. 
     * @param value Value to set for the msdyusd_task_agentscriptaction property.
     */
    public set msdyusd_task_agentscriptaction(value: Msdyusd_task[] | undefined) {
        this._msdyusd_task_agentscriptaction = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_agentscriptaction property value. 
     * @returns a msdyusd_toolbarbutton
     */
    public get msdyusd_toolbarbutton_agentscriptaction() {
        return this._msdyusd_toolbarbutton_agentscriptaction;
    };
    /**
     * Sets the msdyusd_toolbarbutton_agentscriptaction property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_agentscriptaction property.
     */
    public set msdyusd_toolbarbutton_agentscriptaction(value: Msdyusd_toolbarbutton[] | undefined) {
        this._msdyusd_toolbarbutton_agentscriptaction = value;
    };
    /**
     * Gets the msdyusd_uiievent_agentscriptaction property value. 
     * @returns a msdyusd_uiievent
     */
    public get msdyusd_uiievent_agentscriptaction() {
        return this._msdyusd_uiievent_agentscriptaction;
    };
    /**
     * Sets the msdyusd_uiievent_agentscriptaction property value. 
     * @param value Value to set for the msdyusd_uiievent_agentscriptaction property.
     */
    public set msdyusd_uiievent_agentscriptaction(value: Msdyusd_uiievent[] | undefined) {
        this._msdyusd_uiievent_agentscriptaction = value;
    };
    /**
     * Gets the msdyusd_windowroute_agentscriptaction property value. 
     * @returns a msdyusd_windowroute
     */
    public get msdyusd_windowroute_agentscriptaction() {
        return this._msdyusd_windowroute_agentscriptaction;
    };
    /**
     * Sets the msdyusd_windowroute_agentscriptaction property value. 
     * @param value Value to set for the msdyusd_windowroute_agentscriptaction property.
     */
    public set msdyusd_windowroute_agentscriptaction(value: Msdyusd_windowroute[] | undefined) {
        this._msdyusd_windowroute_agentscriptaction = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
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
        writer.writeStringValue("_msdyusd_action_value", this._msdyusd_action_value);
        writer.writeStringValue("_msdyusd_application_value", this._msdyusd_application_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Uii_action>("msdyusd_Action", this.msdyusd_Action);
        writer.writeStringValue("msdyusd_actiondata", this.msdyusd_actiondata);
        writer.writeCollectionOfObjectValues<Annotation>("msdyusd_agentscriptaction_Annotations", this.msdyusd_agentscriptaction_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyusd_agentscriptaction_AsyncOperations", this.msdyusd_agentscriptaction_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyusd_agentscriptaction_BulkDeleteFailures", this.msdyusd_agentscriptaction_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyusd_agentscriptaction_DuplicateBaseRecord", this.msdyusd_agentscriptaction_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyusd_agentscriptaction_DuplicateMatchingRecord", this.msdyusd_agentscriptaction_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyusd_agentscriptaction_MailboxTrackingFolders", this.msdyusd_agentscriptaction_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses", this.msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyusd_agentscriptaction_ProcessSession", this.msdyusd_agentscriptaction_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyusd_agentscriptaction_SyncErrors", this.msdyusd_agentscriptaction_SyncErrors);
        writer.writeCollectionOfObjectValues<Msdyusd_windowroute>("msdyusd_agentscriptaction_windowroute_ApplicationAction", this.msdyusd_agentscriptaction_windowroute_ApplicationAction);
        writer.writeCollectionOfObjectValues<Msdyusd_windowroute>("msdyusd_agentscriptaction_windowroute_MultipleMatches", this.msdyusd_agentscriptaction_windowroute_MultipleMatches);
        writer.writeCollectionOfObjectValues<Msdyusd_windowroute>("msdyusd_agentscriptaction_windowroute_NoMatchesAction", this.msdyusd_agentscriptaction_windowroute_NoMatchesAction);
        writer.writeCollectionOfObjectValues<Msdyusd_windowroute>("msdyusd_agentscriptaction_windowroute_SingleMatchAction", this.msdyusd_agentscriptaction_windowroute_SingleMatchAction);
        writer.writeStringValue("msdyusd_agentscriptactionid", this.msdyusd_agentscriptactionid);
        writer.writeCollectionOfObjectValues<Msdyusd_answer>("msdyusd_answer_agentscriptaction", this.msdyusd_answer_agentscriptaction);
        writer.writeObjectValue<Uii_hostedapplication>("msdyusd_Application", this.msdyusd_Application);
        writer.writeStringValue("msdyusd_condition", this.msdyusd_condition);
        writer.writeCollectionOfObjectValues<Msdyusd_configuration>("msdyusd_configuration_actioncalls", this.msdyusd_configuration_actioncalls);
        writer.writeBooleanValue("msdyusd_launchifdynamic", this.msdyusd_launchifdynamic);
        writer.writeStringValue("msdyusd_name", this.msdyusd_name);
        writer.writeNumberValue("msdyusd_order", this.msdyusd_order);
        writer.writeStringValue("msdyusd_shortcutkey", this.msdyusd_shortcutkey);
        writer.writeCollectionOfObjectValues<Msdyusd_agentscriptaction>("msdyusd_subactioncalls", this.msdyusd_subactioncalls);
        writer.writeCollectionOfObjectValues<Msdyusd_agentscriptaction>("msdyusd_subactioncalls_referenced", this.msdyusd_subactioncalls_referenced);
        writer.writeCollectionOfObjectValues<Msdyusd_task>("msdyusd_task_agentscriptaction", this.msdyusd_task_agentscriptaction);
        writer.writeCollectionOfObjectValues<Msdyusd_toolbarbutton>("msdyusd_toolbarbutton_agentscriptaction", this.msdyusd_toolbarbutton_agentscriptaction);
        writer.writeCollectionOfObjectValues<Msdyusd_uiievent>("msdyusd_uiievent_agentscriptaction", this.msdyusd_uiievent_agentscriptaction);
        writer.writeCollectionOfObjectValues<Msdyusd_windowroute>("msdyusd_windowroute_agentscriptaction", this.msdyusd_windowroute_agentscriptaction);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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
