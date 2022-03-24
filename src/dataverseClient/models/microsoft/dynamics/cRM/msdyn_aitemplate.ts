import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_aimodelFromDiscriminatorValue} from './createMsdyn_aimodelFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_aimodel, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_aitemplate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_aitemplate_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_aitemplate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_aitemplate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_aitemplate_msdyn_aimodel?: Msdyn_aimodel[] | undefined;
    private _msdyn_aitemplate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_aitemplate_ProcessSession?: Processsession[] | undefined;
    private _msdyn_aitemplate_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_aitemplateid?: string | undefined;
    private _msdyn_aitemplateidunique?: string | undefined;
    private _msdyn_databinding?: string | undefined;
    private _msdyn_defaultrunschedulingoptions?: string | undefined;
    private _msdyn_istrainable?: boolean | undefined;
    private _msdyn_resourceinfo?: string | undefined;
    private _msdyn_runconfigschema?: string | undefined;
    private _msdyn_rundataspecification?: string | undefined;
    private _msdyn_templateversion?: number | undefined;
    private _msdyn_trainingconfigschema?: string | undefined;
    private _msdyn_trainingdataspecification?: string | undefined;
    private _msdyn_uniquename?: string | undefined;
    private _msdyn_uxconfiguration?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new msdyn_aitemplate and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_aitemplate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_aitemplate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_aitemplate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_aitemplate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_aitemplate)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_aitemplate)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_aitemplate)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_aitemplate)._owninguser_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_aitemplate).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_aitemplate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_aitemplate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_aitemplate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_aitemplate).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Msdyn_aitemplate).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_aitemplate).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_aitemplate).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_aitemplate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_aitemplate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_aitemplate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_aitemplate_AsyncOperations": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_aitemplate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_aitemplate_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_aitemplate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_aitemplate_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_aitemplate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_aitemplate_msdyn_aimodel": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_aitemplate_msdyn_aimodel = n.getCollectionOfObjectValues<Msdyn_aimodel>(createMsdyn_aimodelFromDiscriminatorValue); },
            "msdyn_aitemplate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_aitemplate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_aitemplate_ProcessSession": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_aitemplate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_aitemplate_SyncErrors": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_aitemplate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_aitemplateid": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_aitemplateid = n.getStringValue(); },
            "msdyn_aitemplateidunique": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_aitemplateidunique = n.getStringValue(); },
            "msdyn_databinding": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_databinding = n.getStringValue(); },
            "msdyn_defaultrunschedulingoptions": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_defaultrunschedulingoptions = n.getStringValue(); },
            "msdyn_istrainable": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_istrainable = n.getBooleanValue(); },
            "msdyn_resourceinfo": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_resourceinfo = n.getStringValue(); },
            "msdyn_runconfigschema": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_runconfigschema = n.getStringValue(); },
            "msdyn_rundataspecification": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_rundataspecification = n.getStringValue(); },
            "msdyn_templateversion": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_templateversion = n.getNumberValue(); },
            "msdyn_trainingconfigschema": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_trainingconfigschema = n.getStringValue(); },
            "msdyn_trainingdataspecification": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_trainingdataspecification = n.getStringValue(); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_uniquename = n.getStringValue(); },
            "msdyn_uxconfiguration": (o, n) => { (o as unknown as Msdyn_aitemplate).msdyn_uxconfiguration = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_aitemplate).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_aitemplate).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_aitemplate).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_aitemplate).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_aitemplate).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_aitemplate).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_aitemplate).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_aitemplate).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_aitemplate).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_aitemplate).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_aitemplate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_aitemplate).versionnumber = n.getNumberValue(); },
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
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the msdyn_aitemplate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_aitemplate_AsyncOperations() {
        return this._msdyn_aitemplate_AsyncOperations;
    };
    /**
     * Sets the msdyn_aitemplate_AsyncOperations property value. 
     * @param value Value to set for the msdyn_aitemplate_AsyncOperations property.
     */
    public set msdyn_aitemplate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_aitemplate_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_aitemplate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_aitemplate_BulkDeleteFailures() {
        return this._msdyn_aitemplate_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_aitemplate_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_aitemplate_BulkDeleteFailures property.
     */
    public set msdyn_aitemplate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_aitemplate_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_aitemplate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_aitemplate_MailboxTrackingFolders() {
        return this._msdyn_aitemplate_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_aitemplate_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_aitemplate_MailboxTrackingFolders property.
     */
    public set msdyn_aitemplate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_aitemplate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_aitemplate_msdyn_aimodel property value. 
     * @returns a msdyn_aimodel
     */
    public get msdyn_aitemplate_msdyn_aimodel() {
        return this._msdyn_aitemplate_msdyn_aimodel;
    };
    /**
     * Sets the msdyn_aitemplate_msdyn_aimodel property value. 
     * @param value Value to set for the msdyn_aitemplate_msdyn_aimodel property.
     */
    public set msdyn_aitemplate_msdyn_aimodel(value: Msdyn_aimodel[] | undefined) {
        this._msdyn_aitemplate_msdyn_aimodel = value;
    };
    /**
     * Gets the msdyn_aitemplate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_aitemplate_PrincipalObjectAttributeAccesses() {
        return this._msdyn_aitemplate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_aitemplate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_aitemplate_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_aitemplate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_aitemplate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_aitemplate_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_aitemplate_ProcessSession() {
        return this._msdyn_aitemplate_ProcessSession;
    };
    /**
     * Sets the msdyn_aitemplate_ProcessSession property value. 
     * @param value Value to set for the msdyn_aitemplate_ProcessSession property.
     */
    public set msdyn_aitemplate_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_aitemplate_ProcessSession = value;
    };
    /**
     * Gets the msdyn_aitemplate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_aitemplate_SyncErrors() {
        return this._msdyn_aitemplate_SyncErrors;
    };
    /**
     * Sets the msdyn_aitemplate_SyncErrors property value. 
     * @param value Value to set for the msdyn_aitemplate_SyncErrors property.
     */
    public set msdyn_aitemplate_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_aitemplate_SyncErrors = value;
    };
    /**
     * Gets the msdyn_aitemplateid property value. 
     * @returns a string
     */
    public get msdyn_aitemplateid() {
        return this._msdyn_aitemplateid;
    };
    /**
     * Sets the msdyn_aitemplateid property value. 
     * @param value Value to set for the msdyn_aitemplateid property.
     */
    public set msdyn_aitemplateid(value: string | undefined) {
        this._msdyn_aitemplateid = value;
    };
    /**
     * Gets the msdyn_aitemplateidunique property value. 
     * @returns a string
     */
    public get msdyn_aitemplateidunique() {
        return this._msdyn_aitemplateidunique;
    };
    /**
     * Sets the msdyn_aitemplateidunique property value. 
     * @param value Value to set for the msdyn_aitemplateidunique property.
     */
    public set msdyn_aitemplateidunique(value: string | undefined) {
        this._msdyn_aitemplateidunique = value;
    };
    /**
     * Gets the msdyn_databinding property value. 
     * @returns a string
     */
    public get msdyn_databinding() {
        return this._msdyn_databinding;
    };
    /**
     * Sets the msdyn_databinding property value. 
     * @param value Value to set for the msdyn_databinding property.
     */
    public set msdyn_databinding(value: string | undefined) {
        this._msdyn_databinding = value;
    };
    /**
     * Gets the msdyn_defaultrunschedulingoptions property value. 
     * @returns a string
     */
    public get msdyn_defaultrunschedulingoptions() {
        return this._msdyn_defaultrunschedulingoptions;
    };
    /**
     * Sets the msdyn_defaultrunschedulingoptions property value. 
     * @param value Value to set for the msdyn_defaultrunschedulingoptions property.
     */
    public set msdyn_defaultrunschedulingoptions(value: string | undefined) {
        this._msdyn_defaultrunschedulingoptions = value;
    };
    /**
     * Gets the msdyn_istrainable property value. 
     * @returns a boolean
     */
    public get msdyn_istrainable() {
        return this._msdyn_istrainable;
    };
    /**
     * Sets the msdyn_istrainable property value. 
     * @param value Value to set for the msdyn_istrainable property.
     */
    public set msdyn_istrainable(value: boolean | undefined) {
        this._msdyn_istrainable = value;
    };
    /**
     * Gets the msdyn_resourceinfo property value. 
     * @returns a string
     */
    public get msdyn_resourceinfo() {
        return this._msdyn_resourceinfo;
    };
    /**
     * Sets the msdyn_resourceinfo property value. 
     * @param value Value to set for the msdyn_resourceinfo property.
     */
    public set msdyn_resourceinfo(value: string | undefined) {
        this._msdyn_resourceinfo = value;
    };
    /**
     * Gets the msdyn_runconfigschema property value. 
     * @returns a string
     */
    public get msdyn_runconfigschema() {
        return this._msdyn_runconfigschema;
    };
    /**
     * Sets the msdyn_runconfigschema property value. 
     * @param value Value to set for the msdyn_runconfigschema property.
     */
    public set msdyn_runconfigschema(value: string | undefined) {
        this._msdyn_runconfigschema = value;
    };
    /**
     * Gets the msdyn_rundataspecification property value. 
     * @returns a string
     */
    public get msdyn_rundataspecification() {
        return this._msdyn_rundataspecification;
    };
    /**
     * Sets the msdyn_rundataspecification property value. 
     * @param value Value to set for the msdyn_rundataspecification property.
     */
    public set msdyn_rundataspecification(value: string | undefined) {
        this._msdyn_rundataspecification = value;
    };
    /**
     * Gets the msdyn_templateversion property value. 
     * @returns a integer
     */
    public get msdyn_templateversion() {
        return this._msdyn_templateversion;
    };
    /**
     * Sets the msdyn_templateversion property value. 
     * @param value Value to set for the msdyn_templateversion property.
     */
    public set msdyn_templateversion(value: number | undefined) {
        this._msdyn_templateversion = value;
    };
    /**
     * Gets the msdyn_trainingconfigschema property value. 
     * @returns a string
     */
    public get msdyn_trainingconfigschema() {
        return this._msdyn_trainingconfigschema;
    };
    /**
     * Sets the msdyn_trainingconfigschema property value. 
     * @param value Value to set for the msdyn_trainingconfigschema property.
     */
    public set msdyn_trainingconfigschema(value: string | undefined) {
        this._msdyn_trainingconfigschema = value;
    };
    /**
     * Gets the msdyn_trainingdataspecification property value. 
     * @returns a string
     */
    public get msdyn_trainingdataspecification() {
        return this._msdyn_trainingdataspecification;
    };
    /**
     * Sets the msdyn_trainingdataspecification property value. 
     * @param value Value to set for the msdyn_trainingdataspecification property.
     */
    public set msdyn_trainingdataspecification(value: string | undefined) {
        this._msdyn_trainingdataspecification = value;
    };
    /**
     * Gets the msdyn_uniquename property value. 
     * @returns a string
     */
    public get msdyn_uniquename() {
        return this._msdyn_uniquename;
    };
    /**
     * Sets the msdyn_uniquename property value. 
     * @param value Value to set for the msdyn_uniquename property.
     */
    public set msdyn_uniquename(value: string | undefined) {
        this._msdyn_uniquename = value;
    };
    /**
     * Gets the msdyn_uxconfiguration property value. 
     * @returns a string
     */
    public get msdyn_uxconfiguration() {
        return this._msdyn_uxconfiguration;
    };
    /**
     * Sets the msdyn_uxconfiguration property value. 
     * @param value Value to set for the msdyn_uxconfiguration property.
     */
    public set msdyn_uxconfiguration(value: string | undefined) {
        this._msdyn_uxconfiguration = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_aitemplate_AsyncOperations", this.msdyn_aitemplate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_aitemplate_BulkDeleteFailures", this.msdyn_aitemplate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_aitemplate_MailboxTrackingFolders", this.msdyn_aitemplate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_aimodel>("msdyn_aitemplate_msdyn_aimodel", this.msdyn_aitemplate_msdyn_aimodel);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_aitemplate_PrincipalObjectAttributeAccesses", this.msdyn_aitemplate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_aitemplate_ProcessSession", this.msdyn_aitemplate_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_aitemplate_SyncErrors", this.msdyn_aitemplate_SyncErrors);
        writer.writeStringValue("msdyn_aitemplateid", this.msdyn_aitemplateid);
        writer.writeStringValue("msdyn_aitemplateidunique", this.msdyn_aitemplateidunique);
        writer.writeStringValue("msdyn_databinding", this.msdyn_databinding);
        writer.writeStringValue("msdyn_defaultrunschedulingoptions", this.msdyn_defaultrunschedulingoptions);
        writer.writeBooleanValue("msdyn_istrainable", this.msdyn_istrainable);
        writer.writeStringValue("msdyn_resourceinfo", this.msdyn_resourceinfo);
        writer.writeStringValue("msdyn_runconfigschema", this.msdyn_runconfigschema);
        writer.writeStringValue("msdyn_rundataspecification", this.msdyn_rundataspecification);
        writer.writeNumberValue("msdyn_templateversion", this.msdyn_templateversion);
        writer.writeStringValue("msdyn_trainingconfigschema", this.msdyn_trainingconfigschema);
        writer.writeStringValue("msdyn_trainingdataspecification", this.msdyn_trainingdataspecification);
        writer.writeStringValue("msdyn_uniquename", this.msdyn_uniquename);
        writer.writeStringValue("msdyn_uxconfiguration", this.msdyn_uxconfiguration);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
