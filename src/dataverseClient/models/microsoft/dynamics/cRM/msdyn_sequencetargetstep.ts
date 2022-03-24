import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_sequencetargetFromDiscriminatorValue} from './createMsdyn_sequencetargetFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_sequencetarget, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_sequencetargetstep extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_sequencetarget_value?: string | undefined;
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
    private _msdyn_completedon?: Date | undefined;
    private _msdyn_convertedtomanualfrom?: number | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_duetime?: Date | undefined;
    private _msdyn_errorstate?: number | undefined;
    private _msdyn_linkedactivityid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_operationparameter?: string | undefined;
    private _msdyn_sequenceduetime?: Date | undefined;
    private _msdyn_sequencestepid?: string | undefined;
    private _msdyn_sequencetarget?: Msdyn_sequencetarget | undefined;
    private _msdyn_sequencetargetstep_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_sequencetargetstep_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_sequencetargetstep_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_sequencetargetstep_ProcessSession?: Processsession[] | undefined;
    private _msdyn_sequencetargetstep_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_sequencetargetstepid?: string | undefined;
    private _msdyn_subtype?: number | undefined;
    private _msdyn_type?: number | undefined;
    private _msdyn_waitstate?: number | undefined;
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
     * Gets the _msdyn_sequencetarget_value property value. 
     * @returns a string
     */
    public get _msdyn_sequencetarget_value() {
        return this.__msdyn_sequencetarget_value;
    };
    /**
     * Sets the _msdyn_sequencetarget_value property value. 
     * @param value Value to set for the _msdyn_sequencetarget_value property.
     */
    public set _msdyn_sequencetarget_value(value: string | undefined) {
        this.__msdyn_sequencetarget_value = value;
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
     * Instantiates a new msdyn_sequencetargetstep and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_sequencetargetstep)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sequencetargetstep)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_sequencetargetstep)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sequencetargetstep)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_sequencetarget_value": (o, n) => { (o as unknown as Msdyn_sequencetargetstep)._msdyn_sequencetarget_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_sequencetargetstep)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_sequencetargetstep)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_sequencetargetstep)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_sequencetargetstep)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_completedon": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_completedon = n.getDateValue(); },
            "msdyn_convertedtomanualfrom": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_convertedtomanualfrom = n.getNumberValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_description = n.getStringValue(); },
            "msdyn_duetime": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_duetime = n.getDateValue(); },
            "msdyn_errorstate": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_errorstate = n.getNumberValue(); },
            "msdyn_linkedactivityid": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_linkedactivityid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_name = n.getStringValue(); },
            "msdyn_operationparameter": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_operationparameter = n.getStringValue(); },
            "msdyn_sequenceduetime": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_sequenceduetime = n.getDateValue(); },
            "msdyn_sequencestepid": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_sequencestepid = n.getStringValue(); },
            "msdyn_sequencetarget": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_sequencetarget = n.getObjectValue<Msdyn_sequencetarget>(createMsdyn_sequencetargetFromDiscriminatorValue); },
            "msdyn_sequencetargetstep_AsyncOperations": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_sequencetargetstep_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_sequencetargetstep_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_sequencetargetstep_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_sequencetargetstep_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_sequencetargetstep_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_sequencetargetstep_ProcessSession": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_sequencetargetstep_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_sequencetargetstep_SyncErrors": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_sequencetargetstep_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_sequencetargetstepid": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_sequencetargetstepid = n.getStringValue(); },
            "msdyn_subtype": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_subtype = n.getNumberValue(); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_type = n.getNumberValue(); },
            "msdyn_waitstate": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).msdyn_waitstate = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_sequencetargetstep).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_completedon property value. 
     * @returns a Date
     */
    public get msdyn_completedon() {
        return this._msdyn_completedon;
    };
    /**
     * Sets the msdyn_completedon property value. 
     * @param value Value to set for the msdyn_completedon property.
     */
    public set msdyn_completedon(value: Date | undefined) {
        this._msdyn_completedon = value;
    };
    /**
     * Gets the msdyn_convertedtomanualfrom property value. 
     * @returns a integer
     */
    public get msdyn_convertedtomanualfrom() {
        return this._msdyn_convertedtomanualfrom;
    };
    /**
     * Sets the msdyn_convertedtomanualfrom property value. 
     * @param value Value to set for the msdyn_convertedtomanualfrom property.
     */
    public set msdyn_convertedtomanualfrom(value: number | undefined) {
        this._msdyn_convertedtomanualfrom = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_duetime property value. 
     * @returns a Date
     */
    public get msdyn_duetime() {
        return this._msdyn_duetime;
    };
    /**
     * Sets the msdyn_duetime property value. 
     * @param value Value to set for the msdyn_duetime property.
     */
    public set msdyn_duetime(value: Date | undefined) {
        this._msdyn_duetime = value;
    };
    /**
     * Gets the msdyn_errorstate property value. 
     * @returns a integer
     */
    public get msdyn_errorstate() {
        return this._msdyn_errorstate;
    };
    /**
     * Sets the msdyn_errorstate property value. 
     * @param value Value to set for the msdyn_errorstate property.
     */
    public set msdyn_errorstate(value: number | undefined) {
        this._msdyn_errorstate = value;
    };
    /**
     * Gets the msdyn_linkedactivityid property value. 
     * @returns a string
     */
    public get msdyn_linkedactivityid() {
        return this._msdyn_linkedactivityid;
    };
    /**
     * Sets the msdyn_linkedactivityid property value. 
     * @param value Value to set for the msdyn_linkedactivityid property.
     */
    public set msdyn_linkedactivityid(value: string | undefined) {
        this._msdyn_linkedactivityid = value;
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
     * Gets the msdyn_operationparameter property value. 
     * @returns a string
     */
    public get msdyn_operationparameter() {
        return this._msdyn_operationparameter;
    };
    /**
     * Sets the msdyn_operationparameter property value. 
     * @param value Value to set for the msdyn_operationparameter property.
     */
    public set msdyn_operationparameter(value: string | undefined) {
        this._msdyn_operationparameter = value;
    };
    /**
     * Gets the msdyn_sequenceduetime property value. 
     * @returns a Date
     */
    public get msdyn_sequenceduetime() {
        return this._msdyn_sequenceduetime;
    };
    /**
     * Sets the msdyn_sequenceduetime property value. 
     * @param value Value to set for the msdyn_sequenceduetime property.
     */
    public set msdyn_sequenceduetime(value: Date | undefined) {
        this._msdyn_sequenceduetime = value;
    };
    /**
     * Gets the msdyn_sequencestepid property value. 
     * @returns a string
     */
    public get msdyn_sequencestepid() {
        return this._msdyn_sequencestepid;
    };
    /**
     * Sets the msdyn_sequencestepid property value. 
     * @param value Value to set for the msdyn_sequencestepid property.
     */
    public set msdyn_sequencestepid(value: string | undefined) {
        this._msdyn_sequencestepid = value;
    };
    /**
     * Gets the msdyn_sequencetarget property value. 
     * @returns a msdyn_sequencetarget
     */
    public get msdyn_sequencetarget() {
        return this._msdyn_sequencetarget;
    };
    /**
     * Sets the msdyn_sequencetarget property value. 
     * @param value Value to set for the msdyn_sequencetarget property.
     */
    public set msdyn_sequencetarget(value: Msdyn_sequencetarget | undefined) {
        this._msdyn_sequencetarget = value;
    };
    /**
     * Gets the msdyn_sequencetargetstep_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_sequencetargetstep_AsyncOperations() {
        return this._msdyn_sequencetargetstep_AsyncOperations;
    };
    /**
     * Sets the msdyn_sequencetargetstep_AsyncOperations property value. 
     * @param value Value to set for the msdyn_sequencetargetstep_AsyncOperations property.
     */
    public set msdyn_sequencetargetstep_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_sequencetargetstep_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_sequencetargetstep_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_sequencetargetstep_BulkDeleteFailures() {
        return this._msdyn_sequencetargetstep_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_sequencetargetstep_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_sequencetargetstep_BulkDeleteFailures property.
     */
    public set msdyn_sequencetargetstep_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_sequencetargetstep_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_sequencetargetstep_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_sequencetargetstep_MailboxTrackingFolders() {
        return this._msdyn_sequencetargetstep_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_sequencetargetstep_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_sequencetargetstep_MailboxTrackingFolders property.
     */
    public set msdyn_sequencetargetstep_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_sequencetargetstep_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses() {
        return this._msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_sequencetargetstep_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_sequencetargetstep_ProcessSession() {
        return this._msdyn_sequencetargetstep_ProcessSession;
    };
    /**
     * Sets the msdyn_sequencetargetstep_ProcessSession property value. 
     * @param value Value to set for the msdyn_sequencetargetstep_ProcessSession property.
     */
    public set msdyn_sequencetargetstep_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_sequencetargetstep_ProcessSession = value;
    };
    /**
     * Gets the msdyn_sequencetargetstep_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_sequencetargetstep_SyncErrors() {
        return this._msdyn_sequencetargetstep_SyncErrors;
    };
    /**
     * Sets the msdyn_sequencetargetstep_SyncErrors property value. 
     * @param value Value to set for the msdyn_sequencetargetstep_SyncErrors property.
     */
    public set msdyn_sequencetargetstep_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_sequencetargetstep_SyncErrors = value;
    };
    /**
     * Gets the msdyn_sequencetargetstepid property value. 
     * @returns a string
     */
    public get msdyn_sequencetargetstepid() {
        return this._msdyn_sequencetargetstepid;
    };
    /**
     * Sets the msdyn_sequencetargetstepid property value. 
     * @param value Value to set for the msdyn_sequencetargetstepid property.
     */
    public set msdyn_sequencetargetstepid(value: string | undefined) {
        this._msdyn_sequencetargetstepid = value;
    };
    /**
     * Gets the msdyn_subtype property value. 
     * @returns a integer
     */
    public get msdyn_subtype() {
        return this._msdyn_subtype;
    };
    /**
     * Sets the msdyn_subtype property value. 
     * @param value Value to set for the msdyn_subtype property.
     */
    public set msdyn_subtype(value: number | undefined) {
        this._msdyn_subtype = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a integer
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: number | undefined) {
        this._msdyn_type = value;
    };
    /**
     * Gets the msdyn_waitstate property value. 
     * @returns a integer
     */
    public get msdyn_waitstate() {
        return this._msdyn_waitstate;
    };
    /**
     * Sets the msdyn_waitstate property value. 
     * @param value Value to set for the msdyn_waitstate property.
     */
    public set msdyn_waitstate(value: number | undefined) {
        this._msdyn_waitstate = value;
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
        writer.writeStringValue("_msdyn_sequencetarget_value", this._msdyn_sequencetarget_value);
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
        writer.writeDateValue("msdyn_completedon", this.msdyn_completedon);
        writer.writeNumberValue("msdyn_convertedtomanualfrom", this.msdyn_convertedtomanualfrom);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeDateValue("msdyn_duetime", this.msdyn_duetime);
        writer.writeNumberValue("msdyn_errorstate", this.msdyn_errorstate);
        writer.writeStringValue("msdyn_linkedactivityid", this.msdyn_linkedactivityid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_operationparameter", this.msdyn_operationparameter);
        writer.writeDateValue("msdyn_sequenceduetime", this.msdyn_sequenceduetime);
        writer.writeStringValue("msdyn_sequencestepid", this.msdyn_sequencestepid);
        writer.writeObjectValue<Msdyn_sequencetarget>("msdyn_sequencetarget", this.msdyn_sequencetarget);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_sequencetargetstep_AsyncOperations", this.msdyn_sequencetargetstep_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_sequencetargetstep_BulkDeleteFailures", this.msdyn_sequencetargetstep_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_sequencetargetstep_MailboxTrackingFolders", this.msdyn_sequencetargetstep_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses", this.msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_sequencetargetstep_ProcessSession", this.msdyn_sequencetargetstep_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_sequencetargetstep_SyncErrors", this.msdyn_sequencetargetstep_SyncErrors);
        writer.writeStringValue("msdyn_sequencetargetstepid", this.msdyn_sequencetargetstepid);
        writer.writeNumberValue("msdyn_subtype", this.msdyn_subtype);
        writer.writeNumberValue("msdyn_type", this.msdyn_type);
        writer.writeNumberValue("msdyn_waitstate", this.msdyn_waitstate);
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
