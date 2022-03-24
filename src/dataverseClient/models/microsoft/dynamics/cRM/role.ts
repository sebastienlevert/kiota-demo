import {createApplicationuserFromDiscriminatorValue} from './createApplicationuserFromDiscriminatorValue';
import {createAppmoduleFromDiscriminatorValue} from './createAppmoduleFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMsdyn_actioncardrolesettingFromDiscriminatorValue} from './createMsdyn_actioncardrolesettingFromDiscriminatorValue';
import {createMsdyn_personasecurityrolemappingFromDiscriminatorValue} from './createMsdyn_personasecurityrolemappingFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrivilegeFromDiscriminatorValue} from './createPrivilegeFromDiscriminatorValue';
import {createRoleFromDiscriminatorValue} from './createRoleFromDiscriminatorValue';
import {createRoletemplateFromDiscriminatorValue} from './createRoletemplateFromDiscriminatorValue';
import {createSolutionFromDiscriminatorValue} from './createSolutionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Applicationuser, Appmodule, Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Msdyn_actioncardrolesetting, Msdyn_personasecurityrolemapping, Organization, Privilege, Roletemplate, Solution, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Role extends Crmbaseentity implements Parsable {
    private __businessunitid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __parentroleid_value?: string | undefined;
    private __parentrootroleid_value?: string | undefined;
    private __roletemplateid_value?: string | undefined;
    private _applicationuserrole?: Applicationuser[] | undefined;
    private _appmoduleroles_association?: Appmodule[] | undefined;
    private _businessunitid?: Businessunit | undefined;
    private _canbedeleted?: BooleanManagedProperty | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _isinherited?: number | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_role_msdyn_actioncardrolesetting?: Msdyn_actioncardrolesetting[] | undefined;
    private _msdyn_role_msdyn_personasecurityrolemapping?: Msdyn_personasecurityrolemapping[] | undefined;
    private _name?: string | undefined;
    private _organizationid?: string | undefined;
    private _organizationid_organization?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _parentroleid?: Role | undefined;
    private _parentrootroleid?: Role | undefined;
    private _role_AsyncOperations?: Asyncoperation[] | undefined;
    private _role_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _role_parent_role?: Role[] | undefined;
    private _role_parent_root_role?: Role[] | undefined;
    private _role_SyncErrors?: Syncerror[] | undefined;
    private _roleid?: string | undefined;
    private _roleidunique?: string | undefined;
    private _roleprivileges_association?: Privilege[] | undefined;
    private _roletemplateid?: Roletemplate | undefined;
    private _solution_role?: Solution | undefined;
    private _solutionid?: string | undefined;
    private _systemuserroles_association?: Systemuser[] | undefined;
    private _teamroles_association?: Team[] | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _businessunitid_value property value. 
     * @returns a string
     */
    public get _businessunitid_value() {
        return this.__businessunitid_value;
    };
    /**
     * Sets the _businessunitid_value property value. 
     * @param value Value to set for the _businessunitid_value property.
     */
    public set _businessunitid_value(value: string | undefined) {
        this.__businessunitid_value = value;
    };
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
     * Gets the _parentroleid_value property value. 
     * @returns a string
     */
    public get _parentroleid_value() {
        return this.__parentroleid_value;
    };
    /**
     * Sets the _parentroleid_value property value. 
     * @param value Value to set for the _parentroleid_value property.
     */
    public set _parentroleid_value(value: string | undefined) {
        this.__parentroleid_value = value;
    };
    /**
     * Gets the _parentrootroleid_value property value. 
     * @returns a string
     */
    public get _parentrootroleid_value() {
        return this.__parentrootroleid_value;
    };
    /**
     * Sets the _parentrootroleid_value property value. 
     * @param value Value to set for the _parentrootroleid_value property.
     */
    public set _parentrootroleid_value(value: string | undefined) {
        this.__parentrootroleid_value = value;
    };
    /**
     * Gets the _roletemplateid_value property value. 
     * @returns a string
     */
    public get _roletemplateid_value() {
        return this.__roletemplateid_value;
    };
    /**
     * Sets the _roletemplateid_value property value. 
     * @param value Value to set for the _roletemplateid_value property.
     */
    public set _roletemplateid_value(value: string | undefined) {
        this.__roletemplateid_value = value;
    };
    /**
     * Gets the applicationuserrole property value. 
     * @returns a applicationuser
     */
    public get applicationuserrole() {
        return this._applicationuserrole;
    };
    /**
     * Sets the applicationuserrole property value. 
     * @param value Value to set for the applicationuserrole property.
     */
    public set applicationuserrole(value: Applicationuser[] | undefined) {
        this._applicationuserrole = value;
    };
    /**
     * Gets the appmoduleroles_association property value. 
     * @returns a appmodule
     */
    public get appmoduleroles_association() {
        return this._appmoduleroles_association;
    };
    /**
     * Sets the appmoduleroles_association property value. 
     * @param value Value to set for the appmoduleroles_association property.
     */
    public set appmoduleroles_association(value: Appmodule[] | undefined) {
        this._appmoduleroles_association = value;
    };
    /**
     * Gets the businessunitid property value. 
     * @returns a businessunit
     */
    public get businessunitid() {
        return this._businessunitid;
    };
    /**
     * Sets the businessunitid property value. 
     * @param value Value to set for the businessunitid property.
     */
    public set businessunitid(value: Businessunit | undefined) {
        this._businessunitid = value;
    };
    /**
     * Gets the canbedeleted property value. 
     * @returns a BooleanManagedProperty
     */
    public get canbedeleted() {
        return this._canbedeleted;
    };
    /**
     * Sets the canbedeleted property value. 
     * @param value Value to set for the canbedeleted property.
     */
    public set canbedeleted(value: BooleanManagedProperty | undefined) {
        this._canbedeleted = value;
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
     * Instantiates a new role and sets the default values.
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
            "_businessunitid_value": (o, n) => { (o as unknown as Role)._businessunitid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Role)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Role)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Role)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Role)._modifiedonbehalfby_value = n.getStringValue(); },
            "_parentroleid_value": (o, n) => { (o as unknown as Role)._parentroleid_value = n.getStringValue(); },
            "_parentrootroleid_value": (o, n) => { (o as unknown as Role)._parentrootroleid_value = n.getStringValue(); },
            "_roletemplateid_value": (o, n) => { (o as unknown as Role)._roletemplateid_value = n.getStringValue(); },
            "applicationuserrole": (o, n) => { (o as unknown as Role).applicationuserrole = n.getCollectionOfObjectValues<Applicationuser>(createApplicationuserFromDiscriminatorValue); },
            "appmoduleroles_association": (o, n) => { (o as unknown as Role).appmoduleroles_association = n.getCollectionOfObjectValues<Appmodule>(createAppmoduleFromDiscriminatorValue); },
            "businessunitid": (o, n) => { (o as unknown as Role).businessunitid = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "canbedeleted": (o, n) => { (o as unknown as Role).canbedeleted = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "componentstate": (o, n) => { (o as unknown as Role).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Role).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Role).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Role).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Role).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Role).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "isinherited": (o, n) => { (o as unknown as Role).isinherited = n.getNumberValue(); },
            "ismanaged": (o, n) => { (o as unknown as Role).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Role).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Role).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Role).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_role_msdyn_actioncardrolesetting": (o, n) => { (o as unknown as Role).msdyn_role_msdyn_actioncardrolesetting = n.getCollectionOfObjectValues<Msdyn_actioncardrolesetting>(createMsdyn_actioncardrolesettingFromDiscriminatorValue); },
            "msdyn_role_msdyn_personasecurityrolemapping": (o, n) => { (o as unknown as Role).msdyn_role_msdyn_personasecurityrolemapping = n.getCollectionOfObjectValues<Msdyn_personasecurityrolemapping>(createMsdyn_personasecurityrolemappingFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Role).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Role).organizationid = n.getStringValue(); },
            "organizationid_organization": (o, n) => { (o as unknown as Role).organizationid_organization = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Role).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Role).overwritetime = n.getDateValue(); },
            "parentroleid": (o, n) => { (o as unknown as Role).parentroleid = n.getObjectValue<Role>(createRoleFromDiscriminatorValue); },
            "parentrootroleid": (o, n) => { (o as unknown as Role).parentrootroleid = n.getObjectValue<Role>(createRoleFromDiscriminatorValue); },
            "role_AsyncOperations": (o, n) => { (o as unknown as Role).role_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "role_BulkDeleteFailures": (o, n) => { (o as unknown as Role).role_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "role_parent_role": (o, n) => { (o as unknown as Role).role_parent_role = n.getCollectionOfObjectValues<Role>(createRoleFromDiscriminatorValue); },
            "role_parent_root_role": (o, n) => { (o as unknown as Role).role_parent_root_role = n.getCollectionOfObjectValues<Role>(createRoleFromDiscriminatorValue); },
            "role_SyncErrors": (o, n) => { (o as unknown as Role).role_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "roleid": (o, n) => { (o as unknown as Role).roleid = n.getStringValue(); },
            "roleidunique": (o, n) => { (o as unknown as Role).roleidunique = n.getStringValue(); },
            "roleprivileges_association": (o, n) => { (o as unknown as Role).roleprivileges_association = n.getCollectionOfObjectValues<Privilege>(createPrivilegeFromDiscriminatorValue); },
            "roletemplateid": (o, n) => { (o as unknown as Role).roletemplateid = n.getObjectValue<Roletemplate>(createRoletemplateFromDiscriminatorValue); },
            "solution_role": (o, n) => { (o as unknown as Role).solution_role = n.getObjectValue<Solution>(createSolutionFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Role).solutionid = n.getStringValue(); },
            "systemuserroles_association": (o, n) => { (o as unknown as Role).systemuserroles_association = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "teamroles_association": (o, n) => { (o as unknown as Role).teamroles_association = n.getCollectionOfObjectValues<Team>(createTeamFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Role).versionnumber = n.getNumberValue(); },
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
     * Gets the isinherited property value. 
     * @returns a integer
     */
    public get isinherited() {
        return this._isinherited;
    };
    /**
     * Sets the isinherited property value. 
     * @param value Value to set for the isinherited property.
     */
    public set isinherited(value: number | undefined) {
        this._isinherited = value;
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
     * Gets the msdyn_role_msdyn_actioncardrolesetting property value. 
     * @returns a msdyn_actioncardrolesetting
     */
    public get msdyn_role_msdyn_actioncardrolesetting() {
        return this._msdyn_role_msdyn_actioncardrolesetting;
    };
    /**
     * Sets the msdyn_role_msdyn_actioncardrolesetting property value. 
     * @param value Value to set for the msdyn_role_msdyn_actioncardrolesetting property.
     */
    public set msdyn_role_msdyn_actioncardrolesetting(value: Msdyn_actioncardrolesetting[] | undefined) {
        this._msdyn_role_msdyn_actioncardrolesetting = value;
    };
    /**
     * Gets the msdyn_role_msdyn_personasecurityrolemapping property value. 
     * @returns a msdyn_personasecurityrolemapping
     */
    public get msdyn_role_msdyn_personasecurityrolemapping() {
        return this._msdyn_role_msdyn_personasecurityrolemapping;
    };
    /**
     * Sets the msdyn_role_msdyn_personasecurityrolemapping property value. 
     * @param value Value to set for the msdyn_role_msdyn_personasecurityrolemapping property.
     */
    public set msdyn_role_msdyn_personasecurityrolemapping(value: Msdyn_personasecurityrolemapping[] | undefined) {
        this._msdyn_role_msdyn_personasecurityrolemapping = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a string
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: string | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the organizationid_organization property value. 
     * @returns a organization
     */
    public get organizationid_organization() {
        return this._organizationid_organization;
    };
    /**
     * Sets the organizationid_organization property value. 
     * @param value Value to set for the organizationid_organization property.
     */
    public set organizationid_organization(value: Organization | undefined) {
        this._organizationid_organization = value;
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
     * Gets the parentroleid property value. 
     * @returns a role
     */
    public get parentroleid() {
        return this._parentroleid;
    };
    /**
     * Sets the parentroleid property value. 
     * @param value Value to set for the parentroleid property.
     */
    public set parentroleid(value: Role | undefined) {
        this._parentroleid = value;
    };
    /**
     * Gets the parentrootroleid property value. 
     * @returns a role
     */
    public get parentrootroleid() {
        return this._parentrootroleid;
    };
    /**
     * Sets the parentrootroleid property value. 
     * @param value Value to set for the parentrootroleid property.
     */
    public set parentrootroleid(value: Role | undefined) {
        this._parentrootroleid = value;
    };
    /**
     * Gets the role_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get role_AsyncOperations() {
        return this._role_AsyncOperations;
    };
    /**
     * Sets the role_AsyncOperations property value. 
     * @param value Value to set for the Role_AsyncOperations property.
     */
    public set role_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._role_AsyncOperations = value;
    };
    /**
     * Gets the role_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get role_BulkDeleteFailures() {
        return this._role_BulkDeleteFailures;
    };
    /**
     * Sets the role_BulkDeleteFailures property value. 
     * @param value Value to set for the Role_BulkDeleteFailures property.
     */
    public set role_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._role_BulkDeleteFailures = value;
    };
    /**
     * Gets the role_parent_role property value. 
     * @returns a role
     */
    public get role_parent_role() {
        return this._role_parent_role;
    };
    /**
     * Sets the role_parent_role property value. 
     * @param value Value to set for the role_parent_role property.
     */
    public set role_parent_role(value: Role[] | undefined) {
        this._role_parent_role = value;
    };
    /**
     * Gets the role_parent_root_role property value. 
     * @returns a role
     */
    public get role_parent_root_role() {
        return this._role_parent_root_role;
    };
    /**
     * Sets the role_parent_root_role property value. 
     * @param value Value to set for the role_parent_root_role property.
     */
    public set role_parent_root_role(value: Role[] | undefined) {
        this._role_parent_root_role = value;
    };
    /**
     * Gets the role_SyncErrors property value. 
     * @returns a syncerror
     */
    public get role_SyncErrors() {
        return this._role_SyncErrors;
    };
    /**
     * Sets the role_SyncErrors property value. 
     * @param value Value to set for the Role_SyncErrors property.
     */
    public set role_SyncErrors(value: Syncerror[] | undefined) {
        this._role_SyncErrors = value;
    };
    /**
     * Gets the roleid property value. 
     * @returns a string
     */
    public get roleid() {
        return this._roleid;
    };
    /**
     * Sets the roleid property value. 
     * @param value Value to set for the roleid property.
     */
    public set roleid(value: string | undefined) {
        this._roleid = value;
    };
    /**
     * Gets the roleidunique property value. 
     * @returns a string
     */
    public get roleidunique() {
        return this._roleidunique;
    };
    /**
     * Sets the roleidunique property value. 
     * @param value Value to set for the roleidunique property.
     */
    public set roleidunique(value: string | undefined) {
        this._roleidunique = value;
    };
    /**
     * Gets the roleprivileges_association property value. 
     * @returns a privilege
     */
    public get roleprivileges_association() {
        return this._roleprivileges_association;
    };
    /**
     * Sets the roleprivileges_association property value. 
     * @param value Value to set for the roleprivileges_association property.
     */
    public set roleprivileges_association(value: Privilege[] | undefined) {
        this._roleprivileges_association = value;
    };
    /**
     * Gets the roletemplateid property value. 
     * @returns a roletemplate
     */
    public get roletemplateid() {
        return this._roletemplateid;
    };
    /**
     * Sets the roletemplateid property value. 
     * @param value Value to set for the roletemplateid property.
     */
    public set roletemplateid(value: Roletemplate | undefined) {
        this._roletemplateid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_businessunitid_value", this._businessunitid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_parentroleid_value", this._parentroleid_value);
        writer.writeStringValue("_parentrootroleid_value", this._parentrootroleid_value);
        writer.writeStringValue("_roletemplateid_value", this._roletemplateid_value);
        writer.writeCollectionOfObjectValues<Applicationuser>("applicationuserrole", this.applicationuserrole);
        writer.writeCollectionOfObjectValues<Appmodule>("appmoduleroles_association", this.appmoduleroles_association);
        writer.writeObjectValue<Businessunit>("businessunitid", this.businessunitid);
        writer.writeObjectValue<BooleanManagedProperty>("canbedeleted", this.canbedeleted);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeNumberValue("isinherited", this.isinherited);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_actioncardrolesetting>("msdyn_role_msdyn_actioncardrolesetting", this.msdyn_role_msdyn_actioncardrolesetting);
        writer.writeCollectionOfObjectValues<Msdyn_personasecurityrolemapping>("msdyn_role_msdyn_personasecurityrolemapping", this.msdyn_role_msdyn_personasecurityrolemapping);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("organizationid", this.organizationid);
        writer.writeObjectValue<Organization>("organizationid_organization", this.organizationid_organization);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Role>("parentroleid", this.parentroleid);
        writer.writeObjectValue<Role>("parentrootroleid", this.parentrootroleid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("role_AsyncOperations", this.role_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("role_BulkDeleteFailures", this.role_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Role>("role_parent_role", this.role_parent_role);
        writer.writeCollectionOfObjectValues<Role>("role_parent_root_role", this.role_parent_root_role);
        writer.writeCollectionOfObjectValues<Syncerror>("role_SyncErrors", this.role_SyncErrors);
        writer.writeStringValue("roleid", this.roleid);
        writer.writeStringValue("roleidunique", this.roleidunique);
        writer.writeCollectionOfObjectValues<Privilege>("roleprivileges_association", this.roleprivileges_association);
        writer.writeObjectValue<Roletemplate>("roletemplateid", this.roletemplateid);
        writer.writeObjectValue<Solution>("solution_role", this.solution_role);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeCollectionOfObjectValues<Systemuser>("systemuserroles_association", this.systemuserroles_association);
        writer.writeCollectionOfObjectValues<Team>("teamroles_association", this.teamroles_association);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solution_role property value. 
     * @returns a solution
     */
    public get solution_role() {
        return this._solution_role;
    };
    /**
     * Sets the solution_role property value. 
     * @param value Value to set for the solution_role property.
     */
    public set solution_role(value: Solution | undefined) {
        this._solution_role = value;
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
     * Gets the systemuserroles_association property value. 
     * @returns a systemuser
     */
    public get systemuserroles_association() {
        return this._systemuserroles_association;
    };
    /**
     * Sets the systemuserroles_association property value. 
     * @param value Value to set for the systemuserroles_association property.
     */
    public set systemuserroles_association(value: Systemuser[] | undefined) {
        this._systemuserroles_association = value;
    };
    /**
     * Gets the teamroles_association property value. 
     * @returns a team
     */
    public get teamroles_association() {
        return this._teamroles_association;
    };
    /**
     * Sets the teamroles_association property value. 
     * @param value Value to set for the teamroles_association property.
     */
    public set teamroles_association(value: Team[] | undefined) {
        this._teamroles_association = value;
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
