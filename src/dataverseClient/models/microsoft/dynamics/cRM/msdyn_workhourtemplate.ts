import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projectparameterFromDiscriminatorValue} from './createMsdyn_projectparameterFromDiscriminatorValue';
import {createMsdyn_projectteamFromDiscriminatorValue} from './createMsdyn_projectteamFromDiscriminatorValue';
import {createMsdyn_resourcerequirementFromDiscriminatorValue} from './createMsdyn_resourcerequirementFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Account, Annotation, Asyncoperation, Bookableresource, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_project, Msdyn_projectparameter, Msdyn_projectteam, Msdyn_resourcerequirement, Msdyn_workorder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_workhourtemplate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_bookableresourceid_value?: string | undefined;
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
    private _msdyn_bookableresourceid?: Bookableresource | undefined;
    private _msdyn_calendarid?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_msdyn_workhourtemplate_account_workhourtemplate?: Account[] | undefined;
    private _msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate?: Msdyn_project[] | undefined;
    private _msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate?: Msdyn_projectparameter[] | undefined;
    private _msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate?: Msdyn_projectteam[] | undefined;
    private _msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate?: Msdyn_workorder[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_workhourtemplate_Annotations?: Annotation[] | undefined;
    private _msdyn_workhourtemplate_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_workhourtemplate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_workhourtemplate_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workhourtemplate_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workhourtemplate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate?: Msdyn_resourcerequirement[] | undefined;
    private _msdyn_workhourtemplate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_workhourtemplate_ProcessSession?: Processsession[] | undefined;
    private _msdyn_workhourtemplate_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_workhourtemplateid?: string | undefined;
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
     * Gets the _msdyn_bookableresourceid_value property value. 
     * @returns a string
     */
    public get _msdyn_bookableresourceid_value() {
        return this.__msdyn_bookableresourceid_value;
    };
    /**
     * Sets the _msdyn_bookableresourceid_value property value. 
     * @param value Value to set for the _msdyn_bookableresourceid_value property.
     */
    public set _msdyn_bookableresourceid_value(value: string | undefined) {
        this.__msdyn_bookableresourceid_value = value;
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
     * Instantiates a new msdyn_workhourtemplate and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_workhourtemplate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workhourtemplate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_workhourtemplate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workhourtemplate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_bookableresourceid_value": (o, n) => { (o as unknown as Msdyn_workhourtemplate)._msdyn_bookableresourceid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_workhourtemplate)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_workhourtemplate)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_workhourtemplate)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_workhourtemplate)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_workhourtemplate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_workhourtemplate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_workhourtemplate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_workhourtemplate).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_workhourtemplate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_workhourtemplate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_workhourtemplate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_bookableresourceid": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_bookableresourceid = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_calendarid": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_calendarid = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_description = n.getStringValue(); },
            "msdyn_msdyn_workhourtemplate_account_workhourtemplate": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_msdyn_workhourtemplate_account_workhourtemplate = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate = n.getCollectionOfObjectValues<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate = n.getCollectionOfObjectValues<Msdyn_projectparameter>(createMsdyn_projectparameterFromDiscriminatorValue); },
            "msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate = n.getCollectionOfObjectValues<Msdyn_projectteam>(createMsdyn_projectteamFromDiscriminatorValue); },
            "msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate = n.getCollectionOfObjectValues<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_name = n.getStringValue(); },
            "msdyn_workhourtemplate_Annotations": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_workhourtemplate_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_workhourtemplate_AsyncOperations": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_workhourtemplate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_workhourtemplate_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_workhourtemplate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_workhourtemplate_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_workhourtemplate_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workhourtemplate_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_workhourtemplate_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workhourtemplate_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_workhourtemplate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate = n.getCollectionOfObjectValues<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "msdyn_workhourtemplate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_workhourtemplate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_workhourtemplate_ProcessSession": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_workhourtemplate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_workhourtemplate_SyncErrors": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_workhourtemplate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_workhourtemplateid": (o, n) => { (o as unknown as Msdyn_workhourtemplate).msdyn_workhourtemplateid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_workhourtemplate).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_workhourtemplate).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_workhourtemplate).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_workhourtemplate).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_workhourtemplate).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_workhourtemplate).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_workhourtemplate).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_workhourtemplate).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_workhourtemplate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_workhourtemplate).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_bookableresourceid property value. 
     * @returns a bookableresource
     */
    public get msdyn_bookableresourceid() {
        return this._msdyn_bookableresourceid;
    };
    /**
     * Sets the msdyn_bookableresourceid property value. 
     * @param value Value to set for the msdyn_bookableresourceid property.
     */
    public set msdyn_bookableresourceid(value: Bookableresource | undefined) {
        this._msdyn_bookableresourceid = value;
    };
    /**
     * Gets the msdyn_calendarid property value. 
     * @returns a string
     */
    public get msdyn_calendarid() {
        return this._msdyn_calendarid;
    };
    /**
     * Sets the msdyn_calendarid property value. 
     * @param value Value to set for the msdyn_calendarid property.
     */
    public set msdyn_calendarid(value: string | undefined) {
        this._msdyn_calendarid = value;
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
     * Gets the msdyn_msdyn_workhourtemplate_account_workhourtemplate property value. 
     * @returns a account
     */
    public get msdyn_msdyn_workhourtemplate_account_workhourtemplate() {
        return this._msdyn_msdyn_workhourtemplate_account_workhourtemplate;
    };
    /**
     * Sets the msdyn_msdyn_workhourtemplate_account_workhourtemplate property value. 
     * @param value Value to set for the msdyn_msdyn_workhourtemplate_account_workhourtemplate property.
     */
    public set msdyn_msdyn_workhourtemplate_account_workhourtemplate(value: Account[] | undefined) {
        this._msdyn_msdyn_workhourtemplate_account_workhourtemplate = value;
    };
    /**
     * Gets the msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate property value. 
     * @returns a msdyn_project
     */
    public get msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate() {
        return this._msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate;
    };
    /**
     * Sets the msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate property value. 
     * @param value Value to set for the msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate property.
     */
    public set msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate(value: Msdyn_project[] | undefined) {
        this._msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate = value;
    };
    /**
     * Gets the msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate property value. 
     * @returns a msdyn_projectparameter
     */
    public get msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate() {
        return this._msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate;
    };
    /**
     * Sets the msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate property value. 
     * @param value Value to set for the msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate property.
     */
    public set msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate(value: Msdyn_projectparameter[] | undefined) {
        this._msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate = value;
    };
    /**
     * Gets the msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate property value. 
     * @returns a msdyn_projectteam
     */
    public get msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate() {
        return this._msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate;
    };
    /**
     * Sets the msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate property value. 
     * @param value Value to set for the msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate property.
     */
    public set msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate(value: Msdyn_projectteam[] | undefined) {
        this._msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate = value;
    };
    /**
     * Gets the msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate() {
        return this._msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate;
    };
    /**
     * Sets the msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate property value. 
     * @param value Value to set for the msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate property.
     */
    public set msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate(value: Msdyn_workorder[] | undefined) {
        this._msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate = value;
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
     * Gets the msdyn_workhourtemplate_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_workhourtemplate_Annotations() {
        return this._msdyn_workhourtemplate_Annotations;
    };
    /**
     * Sets the msdyn_workhourtemplate_Annotations property value. 
     * @param value Value to set for the msdyn_workhourtemplate_Annotations property.
     */
    public set msdyn_workhourtemplate_Annotations(value: Annotation[] | undefined) {
        this._msdyn_workhourtemplate_Annotations = value;
    };
    /**
     * Gets the msdyn_workhourtemplate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_workhourtemplate_AsyncOperations() {
        return this._msdyn_workhourtemplate_AsyncOperations;
    };
    /**
     * Sets the msdyn_workhourtemplate_AsyncOperations property value. 
     * @param value Value to set for the msdyn_workhourtemplate_AsyncOperations property.
     */
    public set msdyn_workhourtemplate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_workhourtemplate_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_workhourtemplate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_workhourtemplate_BulkDeleteFailures() {
        return this._msdyn_workhourtemplate_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_workhourtemplate_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_workhourtemplate_BulkDeleteFailures property.
     */
    public set msdyn_workhourtemplate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_workhourtemplate_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_workhourtemplate_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workhourtemplate_DuplicateBaseRecord() {
        return this._msdyn_workhourtemplate_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_workhourtemplate_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_workhourtemplate_DuplicateBaseRecord property.
     */
    public set msdyn_workhourtemplate_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workhourtemplate_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_workhourtemplate_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workhourtemplate_DuplicateMatchingRecord() {
        return this._msdyn_workhourtemplate_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_workhourtemplate_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_workhourtemplate_DuplicateMatchingRecord property.
     */
    public set msdyn_workhourtemplate_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workhourtemplate_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_workhourtemplate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_workhourtemplate_MailboxTrackingFolders() {
        return this._msdyn_workhourtemplate_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_workhourtemplate_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_workhourtemplate_MailboxTrackingFolders property.
     */
    public set msdyn_workhourtemplate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_workhourtemplate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate() {
        return this._msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate;
    };
    /**
     * Sets the msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate property value. 
     * @param value Value to set for the msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate property.
     */
    public set msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate(value: Msdyn_resourcerequirement[] | undefined) {
        this._msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate = value;
    };
    /**
     * Gets the msdyn_workhourtemplate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_workhourtemplate_PrincipalObjectAttributeAccesses() {
        return this._msdyn_workhourtemplate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_workhourtemplate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_workhourtemplate_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_workhourtemplate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_workhourtemplate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_workhourtemplate_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_workhourtemplate_ProcessSession() {
        return this._msdyn_workhourtemplate_ProcessSession;
    };
    /**
     * Sets the msdyn_workhourtemplate_ProcessSession property value. 
     * @param value Value to set for the msdyn_workhourtemplate_ProcessSession property.
     */
    public set msdyn_workhourtemplate_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_workhourtemplate_ProcessSession = value;
    };
    /**
     * Gets the msdyn_workhourtemplate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_workhourtemplate_SyncErrors() {
        return this._msdyn_workhourtemplate_SyncErrors;
    };
    /**
     * Sets the msdyn_workhourtemplate_SyncErrors property value. 
     * @param value Value to set for the msdyn_workhourtemplate_SyncErrors property.
     */
    public set msdyn_workhourtemplate_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_workhourtemplate_SyncErrors = value;
    };
    /**
     * Gets the msdyn_workhourtemplateid property value. 
     * @returns a string
     */
    public get msdyn_workhourtemplateid() {
        return this._msdyn_workhourtemplateid;
    };
    /**
     * Sets the msdyn_workhourtemplateid property value. 
     * @param value Value to set for the msdyn_workhourtemplateid property.
     */
    public set msdyn_workhourtemplateid(value: string | undefined) {
        this._msdyn_workhourtemplateid = value;
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
        writer.writeStringValue("_msdyn_bookableresourceid_value", this._msdyn_bookableresourceid_value);
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
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresourceid", this.msdyn_bookableresourceid);
        writer.writeStringValue("msdyn_calendarid", this.msdyn_calendarid);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeCollectionOfObjectValues<Account>("msdyn_msdyn_workhourtemplate_account_workhourtemplate", this.msdyn_msdyn_workhourtemplate_account_workhourtemplate);
        writer.writeCollectionOfObjectValues<Msdyn_project>("msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate", this.msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate);
        writer.writeCollectionOfObjectValues<Msdyn_projectparameter>("msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate", this.msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate);
        writer.writeCollectionOfObjectValues<Msdyn_projectteam>("msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate", this.msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate);
        writer.writeCollectionOfObjectValues<Msdyn_workorder>("msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate", this.msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_workhourtemplate_Annotations", this.msdyn_workhourtemplate_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_workhourtemplate_AsyncOperations", this.msdyn_workhourtemplate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_workhourtemplate_BulkDeleteFailures", this.msdyn_workhourtemplate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workhourtemplate_DuplicateBaseRecord", this.msdyn_workhourtemplate_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workhourtemplate_DuplicateMatchingRecord", this.msdyn_workhourtemplate_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_workhourtemplate_MailboxTrackingFolders", this.msdyn_workhourtemplate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_resourcerequirement>("msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate", this.msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_workhourtemplate_PrincipalObjectAttributeAccesses", this.msdyn_workhourtemplate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_workhourtemplate_ProcessSession", this.msdyn_workhourtemplate_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_workhourtemplate_SyncErrors", this.msdyn_workhourtemplate_SyncErrors);
        writer.writeStringValue("msdyn_workhourtemplateid", this.msdyn_workhourtemplateid);
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
