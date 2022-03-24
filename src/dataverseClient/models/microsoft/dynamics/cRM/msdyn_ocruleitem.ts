import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createMsdyn_omnichannelqueueFromDiscriminatorValue} from './createMsdyn_omnichannelqueueFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueFromDiscriminatorValue} from './createQueueFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_liveworkstream, Msdyn_omnichannelqueue, Principal, Principalobjectattributeaccess, Processsession, Queue, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ocruleitem extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_cdsqueueassignid_value?: string | undefined;
    private __msdyn_liveworkstream_value?: string | undefined;
    private __msdyn_queueassignid_value?: string | undefined;
    private __msdyn_userassignid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_action?: string | undefined;
    private _msdyn_assignedto?: number | undefined;
    private _msdyn_cdsqueueassignid?: Queue | undefined;
    private _msdyn_condition?: string | undefined;
    private _msdyn_expression?: string | undefined;
    private _msdyn_liveworkstream?: Msdyn_liveworkstream | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocruleitem_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ocruleitem_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ocruleitem_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ocruleitem_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ocruleitem_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ocruleitem_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ocruleitemid?: string | undefined;
    private _msdyn_priority?: string | undefined;
    private _msdyn_QueueAssignId?: Msdyn_omnichannelqueue | undefined;
    private _msdyn_rulejson?: string | undefined;
    private _msdyn_UserAssignId?: Systemuser | undefined;
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
     * Gets the _msdyn_cdsqueueassignid_value property value. 
     * @returns a string
     */
    public get _msdyn_cdsqueueassignid_value() {
        return this.__msdyn_cdsqueueassignid_value;
    };
    /**
     * Sets the _msdyn_cdsqueueassignid_value property value. 
     * @param value Value to set for the _msdyn_cdsqueueassignid_value property.
     */
    public set _msdyn_cdsqueueassignid_value(value: string | undefined) {
        this.__msdyn_cdsqueueassignid_value = value;
    };
    /**
     * Gets the _msdyn_liveworkstream_value property value. 
     * @returns a string
     */
    public get _msdyn_liveworkstream_value() {
        return this.__msdyn_liveworkstream_value;
    };
    /**
     * Sets the _msdyn_liveworkstream_value property value. 
     * @param value Value to set for the _msdyn_liveworkstream_value property.
     */
    public set _msdyn_liveworkstream_value(value: string | undefined) {
        this.__msdyn_liveworkstream_value = value;
    };
    /**
     * Gets the _msdyn_queueassignid_value property value. 
     * @returns a string
     */
    public get _msdyn_queueassignid_value() {
        return this.__msdyn_queueassignid_value;
    };
    /**
     * Sets the _msdyn_queueassignid_value property value. 
     * @param value Value to set for the _msdyn_queueassignid_value property.
     */
    public set _msdyn_queueassignid_value(value: string | undefined) {
        this.__msdyn_queueassignid_value = value;
    };
    /**
     * Gets the _msdyn_userassignid_value property value. 
     * @returns a string
     */
    public get _msdyn_userassignid_value() {
        return this.__msdyn_userassignid_value;
    };
    /**
     * Sets the _msdyn_userassignid_value property value. 
     * @param value Value to set for the _msdyn_userassignid_value property.
     */
    public set _msdyn_userassignid_value(value: string | undefined) {
        this.__msdyn_userassignid_value = value;
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
     * Instantiates a new msdyn_ocruleitem and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_cdsqueueassignid_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._msdyn_cdsqueueassignid_value = n.getStringValue(); },
            "_msdyn_liveworkstream_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._msdyn_liveworkstream_value = n.getStringValue(); },
            "_msdyn_queueassignid_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._msdyn_queueassignid_value = n.getStringValue(); },
            "_msdyn_userassignid_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._msdyn_userassignid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_ocruleitem)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ocruleitem).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ocruleitem).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ocruleitem).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Msdyn_ocruleitem).description = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ocruleitem).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ocruleitem).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ocruleitem).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ocruleitem).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_action": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_action = n.getStringValue(); },
            "msdyn_assignedto": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_assignedto = n.getNumberValue(); },
            "msdyn_cdsqueueassignid": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_cdsqueueassignid = n.getObjectValue<Queue>(createQueueFromDiscriminatorValue); },
            "msdyn_condition": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_condition = n.getStringValue(); },
            "msdyn_expression": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_expression = n.getStringValue(); },
            "msdyn_liveworkstream": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_liveworkstream = n.getObjectValue<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_name = n.getStringValue(); },
            "msdyn_ocruleitem_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_ocruleitem_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ocruleitem_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_ocruleitem_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ocruleitem_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_ocruleitem_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ocruleitem_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_ocruleitem_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ocruleitem_ProcessSession": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_ocruleitem_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ocruleitem_SyncErrors": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_ocruleitem_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ocruleitemid": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_ocruleitemid = n.getStringValue(); },
            "msdyn_priority": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_priority = n.getStringValue(); },
            "msdyn_QueueAssignId": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_QueueAssignId = n.getObjectValue<Msdyn_omnichannelqueue>(createMsdyn_omnichannelqueueFromDiscriminatorValue); },
            "msdyn_rulejson": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_rulejson = n.getStringValue(); },
            "msdyn_UserAssignId": (o, n) => { (o as unknown as Msdyn_ocruleitem).msdyn_UserAssignId = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ocruleitem).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_ocruleitem).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_ocruleitem).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_ocruleitem).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_ocruleitem).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ocruleitem).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ocruleitem).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ocruleitem).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ocruleitem).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ocruleitem).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_action property value. 
     * @returns a string
     */
    public get msdyn_action() {
        return this._msdyn_action;
    };
    /**
     * Sets the msdyn_action property value. 
     * @param value Value to set for the msdyn_action property.
     */
    public set msdyn_action(value: string | undefined) {
        this._msdyn_action = value;
    };
    /**
     * Gets the msdyn_assignedto property value. 
     * @returns a integer
     */
    public get msdyn_assignedto() {
        return this._msdyn_assignedto;
    };
    /**
     * Sets the msdyn_assignedto property value. 
     * @param value Value to set for the msdyn_assignedto property.
     */
    public set msdyn_assignedto(value: number | undefined) {
        this._msdyn_assignedto = value;
    };
    /**
     * Gets the msdyn_cdsqueueassignid property value. 
     * @returns a queue
     */
    public get msdyn_cdsqueueassignid() {
        return this._msdyn_cdsqueueassignid;
    };
    /**
     * Sets the msdyn_cdsqueueassignid property value. 
     * @param value Value to set for the msdyn_cdsqueueassignid property.
     */
    public set msdyn_cdsqueueassignid(value: Queue | undefined) {
        this._msdyn_cdsqueueassignid = value;
    };
    /**
     * Gets the msdyn_condition property value. 
     * @returns a string
     */
    public get msdyn_condition() {
        return this._msdyn_condition;
    };
    /**
     * Sets the msdyn_condition property value. 
     * @param value Value to set for the msdyn_condition property.
     */
    public set msdyn_condition(value: string | undefined) {
        this._msdyn_condition = value;
    };
    /**
     * Gets the msdyn_expression property value. 
     * @returns a string
     */
    public get msdyn_expression() {
        return this._msdyn_expression;
    };
    /**
     * Sets the msdyn_expression property value. 
     * @param value Value to set for the msdyn_expression property.
     */
    public set msdyn_expression(value: string | undefined) {
        this._msdyn_expression = value;
    };
    /**
     * Gets the msdyn_liveworkstream property value. 
     * @returns a msdyn_liveworkstream
     */
    public get msdyn_liveworkstream() {
        return this._msdyn_liveworkstream;
    };
    /**
     * Sets the msdyn_liveworkstream property value. 
     * @param value Value to set for the msdyn_liveworkstream property.
     */
    public set msdyn_liveworkstream(value: Msdyn_liveworkstream | undefined) {
        this._msdyn_liveworkstream = value;
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
     * Gets the msdyn_ocruleitem_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ocruleitem_AsyncOperations() {
        return this._msdyn_ocruleitem_AsyncOperations;
    };
    /**
     * Sets the msdyn_ocruleitem_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ocruleitem_AsyncOperations property.
     */
    public set msdyn_ocruleitem_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ocruleitem_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ocruleitem_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ocruleitem_BulkDeleteFailures() {
        return this._msdyn_ocruleitem_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ocruleitem_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ocruleitem_BulkDeleteFailures property.
     */
    public set msdyn_ocruleitem_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ocruleitem_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ocruleitem_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ocruleitem_MailboxTrackingFolders() {
        return this._msdyn_ocruleitem_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ocruleitem_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ocruleitem_MailboxTrackingFolders property.
     */
    public set msdyn_ocruleitem_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ocruleitem_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ocruleitem_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ocruleitem_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ocruleitem_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ocruleitem_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ocruleitem_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ocruleitem_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ocruleitem_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ocruleitem_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ocruleitem_ProcessSession() {
        return this._msdyn_ocruleitem_ProcessSession;
    };
    /**
     * Sets the msdyn_ocruleitem_ProcessSession property value. 
     * @param value Value to set for the msdyn_ocruleitem_ProcessSession property.
     */
    public set msdyn_ocruleitem_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ocruleitem_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ocruleitem_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ocruleitem_SyncErrors() {
        return this._msdyn_ocruleitem_SyncErrors;
    };
    /**
     * Sets the msdyn_ocruleitem_SyncErrors property value. 
     * @param value Value to set for the msdyn_ocruleitem_SyncErrors property.
     */
    public set msdyn_ocruleitem_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ocruleitem_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ocruleitemid property value. 
     * @returns a string
     */
    public get msdyn_ocruleitemid() {
        return this._msdyn_ocruleitemid;
    };
    /**
     * Sets the msdyn_ocruleitemid property value. 
     * @param value Value to set for the msdyn_ocruleitemid property.
     */
    public set msdyn_ocruleitemid(value: string | undefined) {
        this._msdyn_ocruleitemid = value;
    };
    /**
     * Gets the msdyn_priority property value. 
     * @returns a string
     */
    public get msdyn_priority() {
        return this._msdyn_priority;
    };
    /**
     * Sets the msdyn_priority property value. 
     * @param value Value to set for the msdyn_priority property.
     */
    public set msdyn_priority(value: string | undefined) {
        this._msdyn_priority = value;
    };
    /**
     * Gets the msdyn_QueueAssignId property value. 
     * @returns a msdyn_omnichannelqueue
     */
    public get msdyn_QueueAssignId() {
        return this._msdyn_QueueAssignId;
    };
    /**
     * Sets the msdyn_QueueAssignId property value. 
     * @param value Value to set for the msdyn_QueueAssignId property.
     */
    public set msdyn_QueueAssignId(value: Msdyn_omnichannelqueue | undefined) {
        this._msdyn_QueueAssignId = value;
    };
    /**
     * Gets the msdyn_rulejson property value. 
     * @returns a string
     */
    public get msdyn_rulejson() {
        return this._msdyn_rulejson;
    };
    /**
     * Sets the msdyn_rulejson property value. 
     * @param value Value to set for the msdyn_rulejson property.
     */
    public set msdyn_rulejson(value: string | undefined) {
        this._msdyn_rulejson = value;
    };
    /**
     * Gets the msdyn_UserAssignId property value. 
     * @returns a systemuser
     */
    public get msdyn_UserAssignId() {
        return this._msdyn_UserAssignId;
    };
    /**
     * Sets the msdyn_UserAssignId property value. 
     * @param value Value to set for the msdyn_UserAssignId property.
     */
    public set msdyn_UserAssignId(value: Systemuser | undefined) {
        this._msdyn_UserAssignId = value;
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
        writer.writeStringValue("_msdyn_cdsqueueassignid_value", this._msdyn_cdsqueueassignid_value);
        writer.writeStringValue("_msdyn_liveworkstream_value", this._msdyn_liveworkstream_value);
        writer.writeStringValue("_msdyn_queueassignid_value", this._msdyn_queueassignid_value);
        writer.writeStringValue("_msdyn_userassignid_value", this._msdyn_userassignid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_action", this.msdyn_action);
        writer.writeNumberValue("msdyn_assignedto", this.msdyn_assignedto);
        writer.writeObjectValue<Queue>("msdyn_cdsqueueassignid", this.msdyn_cdsqueueassignid);
        writer.writeStringValue("msdyn_condition", this.msdyn_condition);
        writer.writeStringValue("msdyn_expression", this.msdyn_expression);
        writer.writeObjectValue<Msdyn_liveworkstream>("msdyn_liveworkstream", this.msdyn_liveworkstream);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ocruleitem_AsyncOperations", this.msdyn_ocruleitem_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ocruleitem_BulkDeleteFailures", this.msdyn_ocruleitem_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ocruleitem_MailboxTrackingFolders", this.msdyn_ocruleitem_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ocruleitem_PrincipalObjectAttributeAccesses", this.msdyn_ocruleitem_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ocruleitem_ProcessSession", this.msdyn_ocruleitem_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ocruleitem_SyncErrors", this.msdyn_ocruleitem_SyncErrors);
        writer.writeStringValue("msdyn_ocruleitemid", this.msdyn_ocruleitemid);
        writer.writeStringValue("msdyn_priority", this.msdyn_priority);
        writer.writeObjectValue<Msdyn_omnichannelqueue>("msdyn_QueueAssignId", this.msdyn_QueueAssignId);
        writer.writeStringValue("msdyn_rulejson", this.msdyn_rulejson);
        writer.writeObjectValue<Systemuser>("msdyn_UserAssignId", this.msdyn_UserAssignId);
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
