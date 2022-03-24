import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_productivitymacroactiontemplateFromDiscriminatorValue} from './createMsdyn_productivitymacroactiontemplateFromDiscriminatorValue';
import {createMsdyn_productivityparameterdefinitionFromDiscriminatorValue} from './createMsdyn_productivityparameterdefinitionFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_productivitymacroactiontemplate, Msdyn_productivityparameterdefinition, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_productivityactioninputparameter extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_actiontemplateinputparameterid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_actiontemplateinputparameterid?: Msdyn_productivitymacroactiontemplate | undefined;
    private _msdyn_msdyn_prod_actioninputparameter_msdyn_par?: Msdyn_productivityparameterdefinition[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_parametertype?: boolean | undefined;
    private _msdyn_productivityactioninputparameter_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_productivityactioninputparameter_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_productivityactioninputparameter_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_productivityactioninputparameter_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_productivityactioninputparameter_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_productivityactioninputparameter_ProcessSession?: Processsession[] | undefined;
    private _msdyn_productivityactioninputparameter_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_productivityactioninputparameterid?: string | undefined;
    private _msdyn_uniquename?: string | undefined;
    private _msdyn_visibility?: string | undefined;
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
     * Gets the _msdyn_actiontemplateinputparameterid_value property value. 
     * @returns a string
     */
    public get _msdyn_actiontemplateinputparameterid_value() {
        return this.__msdyn_actiontemplateinputparameterid_value;
    };
    /**
     * Sets the _msdyn_actiontemplateinputparameterid_value property value. 
     * @param value Value to set for the _msdyn_actiontemplateinputparameterid_value property.
     */
    public set _msdyn_actiontemplateinputparameterid_value(value: string | undefined) {
        this.__msdyn_actiontemplateinputparameterid_value = value;
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
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
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
     * Instantiates a new msdyn_productivityactioninputparameter and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_actiontemplateinputparameterid_value": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter)._msdyn_actiontemplateinputparameterid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_actiontemplateinputparameterid": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_actiontemplateinputparameterid = n.getObjectValue<Msdyn_productivitymacroactiontemplate>(createMsdyn_productivitymacroactiontemplateFromDiscriminatorValue); },
            "msdyn_msdyn_prod_actioninputparameter_msdyn_par": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_msdyn_prod_actioninputparameter_msdyn_par = n.getCollectionOfObjectValues<Msdyn_productivityparameterdefinition>(createMsdyn_productivityparameterdefinitionFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_name = n.getStringValue(); },
            "msdyn_parametertype": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_parametertype = n.getBooleanValue(); },
            "msdyn_productivityactioninputparameter_AsyncOperations": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_productivityactioninputparameter_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_productivityactioninputparameter_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_productivityactioninputparameter_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_productivityactioninputparameter_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_productivityactioninputparameter_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_productivityactioninputparameter_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_productivityactioninputparameter_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_productivityactioninputparameter_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_productivityactioninputparameter_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_productivityactioninputparameter_ProcessSession": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_productivityactioninputparameter_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_productivityactioninputparameter_SyncErrors": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_productivityactioninputparameter_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_productivityactioninputparameterid": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_productivityactioninputparameterid = n.getStringValue(); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_uniquename = n.getStringValue(); },
            "msdyn_visibility": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).msdyn_visibility = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_productivityactioninputparameter).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_actiontemplateinputparameterid property value. 
     * @returns a msdyn_productivitymacroactiontemplate
     */
    public get msdyn_actiontemplateinputparameterid() {
        return this._msdyn_actiontemplateinputparameterid;
    };
    /**
     * Sets the msdyn_actiontemplateinputparameterid property value. 
     * @param value Value to set for the msdyn_actiontemplateinputparameterid property.
     */
    public set msdyn_actiontemplateinputparameterid(value: Msdyn_productivitymacroactiontemplate | undefined) {
        this._msdyn_actiontemplateinputparameterid = value;
    };
    /**
     * Gets the msdyn_msdyn_prod_actioninputparameter_msdyn_par property value. 
     * @returns a msdyn_productivityparameterdefinition
     */
    public get msdyn_msdyn_prod_actioninputparameter_msdyn_par() {
        return this._msdyn_msdyn_prod_actioninputparameter_msdyn_par;
    };
    /**
     * Sets the msdyn_msdyn_prod_actioninputparameter_msdyn_par property value. 
     * @param value Value to set for the msdyn_msdyn_prod_actioninputparameter_msdyn_par property.
     */
    public set msdyn_msdyn_prod_actioninputparameter_msdyn_par(value: Msdyn_productivityparameterdefinition[] | undefined) {
        this._msdyn_msdyn_prod_actioninputparameter_msdyn_par = value;
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
     * Gets the msdyn_parametertype property value. 
     * @returns a boolean
     */
    public get msdyn_parametertype() {
        return this._msdyn_parametertype;
    };
    /**
     * Sets the msdyn_parametertype property value. 
     * @param value Value to set for the msdyn_parametertype property.
     */
    public set msdyn_parametertype(value: boolean | undefined) {
        this._msdyn_parametertype = value;
    };
    /**
     * Gets the msdyn_productivityactioninputparameter_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_productivityactioninputparameter_AsyncOperations() {
        return this._msdyn_productivityactioninputparameter_AsyncOperations;
    };
    /**
     * Sets the msdyn_productivityactioninputparameter_AsyncOperations property value. 
     * @param value Value to set for the msdyn_productivityactioninputparameter_AsyncOperations property.
     */
    public set msdyn_productivityactioninputparameter_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_productivityactioninputparameter_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_productivityactioninputparameter_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_productivityactioninputparameter_BulkDeleteFailures() {
        return this._msdyn_productivityactioninputparameter_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_productivityactioninputparameter_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_productivityactioninputparameter_BulkDeleteFailures property.
     */
    public set msdyn_productivityactioninputparameter_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_productivityactioninputparameter_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_productivityactioninputparameter_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_productivityactioninputparameter_DuplicateBaseRecord() {
        return this._msdyn_productivityactioninputparameter_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_productivityactioninputparameter_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_productivityactioninputparameter_DuplicateBaseRecord property.
     */
    public set msdyn_productivityactioninputparameter_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_productivityactioninputparameter_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_productivityactioninputparameter_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_productivityactioninputparameter_DuplicateMatchingRecord() {
        return this._msdyn_productivityactioninputparameter_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_productivityactioninputparameter_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_productivityactioninputparameter_DuplicateMatchingRecord property.
     */
    public set msdyn_productivityactioninputparameter_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_productivityactioninputparameter_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_productivityactioninputparameter_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_productivityactioninputparameter_MailboxTrackingFolders() {
        return this._msdyn_productivityactioninputparameter_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_productivityactioninputparameter_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_productivityactioninputparameter_MailboxTrackingFolders property.
     */
    public set msdyn_productivityactioninputparameter_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_productivityactioninputparameter_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses() {
        return this._msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_productivityactioninputparameter_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_productivityactioninputparameter_ProcessSession() {
        return this._msdyn_productivityactioninputparameter_ProcessSession;
    };
    /**
     * Sets the msdyn_productivityactioninputparameter_ProcessSession property value. 
     * @param value Value to set for the msdyn_productivityactioninputparameter_ProcessSession property.
     */
    public set msdyn_productivityactioninputparameter_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_productivityactioninputparameter_ProcessSession = value;
    };
    /**
     * Gets the msdyn_productivityactioninputparameter_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_productivityactioninputparameter_SyncErrors() {
        return this._msdyn_productivityactioninputparameter_SyncErrors;
    };
    /**
     * Sets the msdyn_productivityactioninputparameter_SyncErrors property value. 
     * @param value Value to set for the msdyn_productivityactioninputparameter_SyncErrors property.
     */
    public set msdyn_productivityactioninputparameter_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_productivityactioninputparameter_SyncErrors = value;
    };
    /**
     * Gets the msdyn_productivityactioninputparameterid property value. 
     * @returns a string
     */
    public get msdyn_productivityactioninputparameterid() {
        return this._msdyn_productivityactioninputparameterid;
    };
    /**
     * Sets the msdyn_productivityactioninputparameterid property value. 
     * @param value Value to set for the msdyn_productivityactioninputparameterid property.
     */
    public set msdyn_productivityactioninputparameterid(value: string | undefined) {
        this._msdyn_productivityactioninputparameterid = value;
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
     * Gets the msdyn_visibility property value. 
     * @returns a string
     */
    public get msdyn_visibility() {
        return this._msdyn_visibility;
    };
    /**
     * Sets the msdyn_visibility property value. 
     * @param value Value to set for the msdyn_visibility property.
     */
    public set msdyn_visibility(value: string | undefined) {
        this._msdyn_visibility = value;
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
        writer.writeStringValue("_msdyn_actiontemplateinputparameterid_value", this._msdyn_actiontemplateinputparameterid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_productivitymacroactiontemplate>("msdyn_actiontemplateinputparameterid", this.msdyn_actiontemplateinputparameterid);
        writer.writeCollectionOfObjectValues<Msdyn_productivityparameterdefinition>("msdyn_msdyn_prod_actioninputparameter_msdyn_par", this.msdyn_msdyn_prod_actioninputparameter_msdyn_par);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeBooleanValue("msdyn_parametertype", this.msdyn_parametertype);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_productivityactioninputparameter_AsyncOperations", this.msdyn_productivityactioninputparameter_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_productivityactioninputparameter_BulkDeleteFailures", this.msdyn_productivityactioninputparameter_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_productivityactioninputparameter_DuplicateBaseRecord", this.msdyn_productivityactioninputparameter_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_productivityactioninputparameter_DuplicateMatchingRecord", this.msdyn_productivityactioninputparameter_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_productivityactioninputparameter_MailboxTrackingFolders", this.msdyn_productivityactioninputparameter_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses", this.msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_productivityactioninputparameter_ProcessSession", this.msdyn_productivityactioninputparameter_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_productivityactioninputparameter_SyncErrors", this.msdyn_productivityactioninputparameter_SyncErrors);
        writer.writeStringValue("msdyn_productivityactioninputparameterid", this.msdyn_productivityactioninputparameterid);
        writer.writeStringValue("msdyn_uniquename", this.msdyn_uniquename);
        writer.writeStringValue("msdyn_visibility", this.msdyn_visibility);
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
